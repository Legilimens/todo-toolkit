import React from 'react';
import { Button } from 'antd';

import { useAppDispatch, useAppSelector } from 'customHooks/redux';

import {
  clearTextAction,
  setTextAction,
} from 'store/todos/todoField/todoFieldSlice';
import { addTodoAction } from 'store/todos/todoList/todoListSlice';
import { fetchTodosAction } from 'store/todos/todoList/thunk';
import { getTodoFieldText } from 'store/todos/todoField/selectors';
import { getAsyncTodoIsLoading } from 'store/todos/todoList/selectors';

import styles from './index.module.scss';

const InputField = () => {
  const fieldText = useAppSelector(getTodoFieldText);
  const asyncTodoIsLoading = useAppSelector(getAsyncTodoIsLoading);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextAction(e.target.value));
  };

  const handleClearInput = () => {
    dispatch(clearTextAction());
  };

  const handleAddTodo = () => {
    if (fieldText.trim().length) {
      dispatch(
        addTodoAction({
          id: new Date().toISOString(),
          title: fieldText,
          completed: false,
        }),
      );
      handleClearInput();
    }
  };

  const handleFetchTodos = () => {
    dispatch(fetchTodosAction());
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <input type="text" value={fieldText} onChange={handleInputChange} />
        <Button type="primary" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <span onClick={handleClearInput} className={styles.clear}>
        &times;
      </span>
      <Button onClick={handleFetchTodos} loading={asyncTodoIsLoading}>
        Fetch todos
      </Button>
    </div>
  );
};

export default InputField;

import React from 'react';

import { useAppDispatch, useAppSelector } from 'customHooks/redux';

import { getTodoFieldText } from 'store/todos/todoField/selectors';
import {
  clearTextAction,
  setTextAction,
} from 'store/todos/todoField/todoFieldSlice';
import { addTodoAction } from 'store/todos/todoList/todoListSlice';

import styles from './index.module.scss'

const InputField = () => {
  const fieldText = useAppSelector(getTodoFieldText);
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
          text: fieldText,
          completed: false,
        }),
      );
      handleClearInput();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <input type="text" value={fieldText} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <span onClick={handleClearInput} className={styles.clear}>&times;</span>
    </div>
  );
};

export default InputField;

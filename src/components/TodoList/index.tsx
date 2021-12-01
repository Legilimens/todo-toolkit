import React from 'react';

import { useAppDispatch, useAppSelector } from 'customHooks/redux';

import { toggleTodoCompleteAction } from 'store/todos/todoList/todoListSlice';
import { removeTodoAsyncAction } from 'store/todos/todoList/thunk';
import { getTodoList } from 'store/todos/todoList/selectors';

import styles from './index.module.scss';

const InputField = () => {
  const todoList = useAppSelector(getTodoList);
  const dispatch = useAppDispatch();

  const handleToggleTodoComplete = (id: string) => {
    dispatch(toggleTodoCompleteAction(id));
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodoAsyncAction(id));
  };

  return (
    <ul className={styles.ul}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.li}>
          <div>
            <input
              id={todo.id}
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodoComplete(todo.id)}
            />
            &nbsp;
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <span
            className={styles.remove}
            onClick={() => handleRemoveTodo(todo.id)}>
            &times;
          </span>
        </li>
      ))}
    </ul>
  );
};

export default InputField;

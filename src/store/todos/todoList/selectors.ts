import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const getTodoList = (state: RootState) => state.todos.todoList.todos;
export const getAsyncTodoIsLoading = (state: RootState) =>
  state.todos.todoList.loading;

export const testSelector = createSelector(
  getTodoList,
  getAsyncTodoIsLoading,
  (todoList, isLoading) => [...todoList, isLoading || null],
);

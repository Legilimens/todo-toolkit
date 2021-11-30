import { RootState } from 'store';

export const getTodoList = (state: RootState) =>
  state.todos.todoList.todos;

import { RootState } from 'store';

export const getTodoFieldText = (state: RootState) =>
  state.todos.todoField.text;

import { AxiosError } from 'axios';

export const TODOLIST_SLICE_ALIAS = 'todoList' as const;

export type TTodos = {
  todos: Array<TTodo>;
  loading: boolean;
  error: AxiosError | null;
};

export type TTodo = {
  id: string;
  title: string;
  completed: boolean;
};

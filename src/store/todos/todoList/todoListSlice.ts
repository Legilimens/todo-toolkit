import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import {
  TTodos,
  TTodo,
  TODOLIST_SLICE_ALIAS,
} from 'store/todos/todoList/types';
import {
  fetchTodosAction,
  removeTodoAsyncAction,
} from 'store/todos/todoList/thunk';

const initialState: TTodos = {
  todos: [],
  loading: false,
  error: null,
};

const setError = (
  state: TTodos,
  { payload }: PayloadAction<AxiosError>,
) => {
  state.loading = false;
  state.error = payload;
};

export const todoListSlice = createSlice({
  name: TODOLIST_SLICE_ALIAS,
  initialState,
  reducers: {
    addTodoAction: (state, { payload }: PayloadAction<TTodo>) => {
      state.todos.push(payload);
    },
    toggleTodoCompleteAction: (state, { payload }: PayloadAction<string>) => {
      const selectedTodo = state.todos.find((todo) => todo.id === payload);
      if (selectedTodo) {
        selectedTodo.completed = !selectedTodo.completed;
      }
    },
    removeTodoAction: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
  extraReducers: {
    // загрузка todo's с сервера
    [fetchTodosAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchTodosAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<TTodo>>,
    ) => {
      state.todos = state.todos.concat(payload);
      state.loading = false;
    },
    [fetchTodosAction.rejected.type]: setError,

    // удаление todo
    [removeTodoAsyncAction.rejected.type]: setError,
  },
});

export const { addTodoAction, toggleTodoCompleteAction, removeTodoAction } =
  todoListSlice.actions;

export default todoListSlice.reducer;

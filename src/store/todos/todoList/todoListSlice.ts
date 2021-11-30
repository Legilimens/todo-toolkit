import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTodos, TTodo } from 'store/todos/todoList/entities';

const initialState: TTodos = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
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
});

export const { addTodoAction, toggleTodoCompleteAction, removeTodoAction } =
  todoListSlice.actions;

export default todoListSlice.reducer;

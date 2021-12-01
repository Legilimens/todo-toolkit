import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import axios from 'axios';
import { RootState } from 'store';

import { removeTodoAction } from 'store/todos/todoList/todoListSlice';
import { TODOLIST_SLICE_ALIAS } from 'store/todos/todoList/types';
import { testSelector } from 'store/todos/todoList/selectors';

export const fetchTodosAction = createAsyncThunk(
  `${TODOLIST_SLICE_ALIAS}/fetchTodos`,
  async (_, { rejectWithValue, getState }) => {
    const test = testSelector(getState() as RootState);
    console.log(test);
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=10',
      );
      return data;
    } catch (error) {
      notification.error({ message: error.message });
      return rejectWithValue(JSON.parse(JSON.stringify(error)));
    }
  },
);

export const removeTodoAsyncAction = createAsyncThunk(
  `${TODOLIST_SLICE_ALIAS}/removeTodo`,
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      dispatch(removeTodoAction(id));
      notification.success({ message: 'Удалено' });
    } catch (error) {
      notification.error({ message: error.message });
      return rejectWithValue(JSON.parse(JSON.stringify(error)));
    }
  },
);

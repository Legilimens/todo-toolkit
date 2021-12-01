import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTodoField } from 'store/todos/todoField/types';

const initialState: TTodoField = {
  text: '',
};

export const todoFieldSlice = createSlice({
  name: 'todoField',
  initialState,
  reducers: {
    setTextAction: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    },
    clearTextAction: (state) => {
      state.text = '';
    },
  },
});

export const { setTextAction, clearTextAction } = todoFieldSlice.actions;

export default todoFieldSlice.reducer;

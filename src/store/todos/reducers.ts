import { combineReducers } from '@reduxjs/toolkit';

import todoListReducer from 'store/todos/todoList/todoListSlice';
import todoFieldReducer from 'store/todos/todoField/todoFieldSlice';

const todoReducer = combineReducers({
  todoList: todoListReducer,
  todoField: todoFieldReducer,
});

export default todoReducer;
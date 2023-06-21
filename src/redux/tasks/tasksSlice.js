import { createSlice } from '@reduxjs/toolkit';
import {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  changeTaskPriority,
  deleteTask,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTasks.pending, handlePending)
      .addCase(getTask.pending, handlePending)
      .addCase(addTask.pending, handlePending)
      .addCase(updateTask.pending, handlePending)
      .addCase(changeTaskPriority.pending, handlePending)
      .addCase(deleteTask.pending, handlePending)
      .addCase(getAllTasks.rejected, handleRejected)
      .addCase(getTask.rejected, handleRejected)
      .addCase(addTask.rejected, handleRejected)
      .addCase(updateTask.rejected, handleRejected)
      .addCase(changeTaskPriority.rejected, handleRejected)
      .addCase(deleteTask.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;

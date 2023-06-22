import { createSlice } from '@reduxjs/toolkit';
import {
  getAllTasks,
  getTaskById,
  createTask,
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
  taskById: {},
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTasks.pending, handlePending)
      .addCase(getTaskById.pending, handlePending)
      .addCase(createTask.pending, handlePending)
      .addCase(updateTask.pending, handlePending)
      .addCase(changeTaskPriority.pending, handlePending)
      .addCase(deleteTask.pending, handlePending)
      .addCase(getAllTasks.rejected, handleRejected)
      .addCase(getTaskById.rejected, handleRejected)
      .addCase(createTask.rejected, handleRejected)
      .addCase(updateTask.rejected, handleRejected)
      .addCase(changeTaskPriority.rejected, handleRejected)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTaskById.fulfilled, (state, { payload }) => {
        state.taskById = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

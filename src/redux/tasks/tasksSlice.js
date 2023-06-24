import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../auth/operations';
import {
  getAllTasks,
  getMonthTasks,
  getTaskById,
  createTask,
  updateTask,
  // changeTaskPriority,
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
      .addCase(getMonthTasks.pending, handlePending)
      .addCase(getTaskById.pending, handlePending)
      .addCase(createTask.pending, handlePending)
      .addCase(updateTask.pending, handlePending)
      // .addCase(changeTaskPriority.pending, handlePending)
      .addCase(deleteTask.pending, handlePending)
      .addCase(getAllTasks.rejected, handleRejected)
      .addCase(getMonthTasks.rejected, handleRejected)
      .addCase(getTaskById.rejected, handleRejected)
      .addCase(createTask.rejected, handleRejected)
      .addCase(updateTask.rejected, handleRejected)
      // .addCase(changeTaskPriority.rejected, handleRejected)
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
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.findIndex(task => task._id === payload._id);
        state.tasks[index] = payload;
      })
      // .addCase(changeTaskPriority.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.tasks.findIndex(task => task._id === payload._id);
      //   state.tasks[index] = { ...state.tasks[index], payload };
      // })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        const index = state.tasks.findIndex(item => item._id === payload);
        state.tasks.splice(index, 1);
      })
      .addCase(logoutUser.fulfilled, state => {
        state.tasks = [];
        state.taskById = {};
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

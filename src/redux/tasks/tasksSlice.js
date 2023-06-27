import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../auth/operations';
import {
  getAllTasks,
  getMonthTasks,
  getDayTasks,
  getTaskById,
  createTask,
  updateTask,
  changeTaskCategory,
  getTasksStatistics,
  deleteTask,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.successful = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  allTasks: [],
  tasks: [],
  tasksStatistics: {},
  taskById: {},
  isLoading: false,
  successful: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTasks.pending, handlePending)
      .addCase(getMonthTasks.pending, handlePending)
      .addCase(getDayTasks.pending, handlePending)
      .addCase(getTaskById.pending, handlePending)
      .addCase(createTask.pending, handlePending)
      .addCase(updateTask.pending, handlePending)
      .addCase(changeTaskCategory.pending, handlePending)
      .addCase(getTasksStatistics.pending, handlePending)
      .addCase(deleteTask.pending, handlePending)
      .addCase(getAllTasks.rejected, handleRejected)
      .addCase(getMonthTasks.rejected, handleRejected)
      .addCase(getDayTasks.rejected, handleRejected)
      .addCase(getTaskById.rejected, handleRejected)
      .addCase(createTask.rejected, handleRejected)
      .addCase(updateTask.rejected, handleRejected)
      .addCase(changeTaskCategory.rejected, handleRejected)
      .addCase(getTasksStatistics.rejected, handleRejected)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.allTasks = payload;
        state.isLoading = false;
        state.error = null;
        state.successful = true;
      })
      .addCase(getMonthTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
        state.error = null;
        state.successful = true;
      })
      .addCase(getDayTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
        state.error = null;
        state.successful = true;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
        state.isLoading = false;
        state.error = null;
        state.successful = true;
      })
      .addCase(getTaskById.fulfilled, (state, { payload }) => {
        state.taskById = payload;
        state.isLoading = false;
        state.error = null;
        state.successful = true;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        const index = state.tasks.findIndex(task => task._id === payload._id);
        state.tasks[index] = payload;
      })
      .addCase(changeTaskCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        const index = state.tasks.findIndex(task => task._id === payload._id);
        state.tasks[index] = { ...state.tasks[index], payload };
      })
      .addCase(getTasksStatistics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        state.tasksStatistics = payload;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        const index = state.tasks.findIndex(item => item._id === payload);
        state.tasks.splice(index, 1);
      })
      .addCase(logoutUser.fulfilled, state => {
        state.allTasks = [];
        state.tasks = [];
        state.tasksStatistics = {};
        state.taskById = {};
        state.isLoading = false;
        state.successful = false;
        state.error = null;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

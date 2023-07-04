import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthTasks = createAsyncThunk(
  'tasks/getMonthTasks',
  async (date, thunkAPI) => {
    try {
      const response = await instance.get(`/tasks?month=${date}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDayTasks = createAsyncThunk(
  'tasks/getDayTasks',
  async (date, thunkAPI) => {
    try {
      const response = await instance.get(`/tasks?day=${date}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTaskById = createAsyncThunk(
  'tasks/getTaskById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, start, end, priority, category, date }, thunkAPI) => {
    try {
      const response = await instance.post('/tasks', {
        title,
        start,
        end,
        priority,
        category,
        date,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, title, start, end, priority, category, date }, thunkAPI) => {
    try {
      const response = await instance.patch(`/tasks/${id}`, {
        title,
        start,
        end,
        priority,
        category,
        date,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/tasks/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTaskCategory = createAsyncThunk(
  'tasks/changeTaskCategory',
  async ({ id, category }, thunkAPI) => {
    try {
      const response = await instance.patch(`/tasks/category/${id}`, {
        category,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTasksStatistics = createAsyncThunk(
  'tasks/getTasksStatistics',
  async (date, thunkAPI) => {
    try {
      // date format YYYY-MM-DD
      const response = await instance.get(`/tasks/statistics/?day=${date}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

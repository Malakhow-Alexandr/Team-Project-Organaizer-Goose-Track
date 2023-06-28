import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/tasks');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthTasks = createAsyncThunk(
  'tasks/getMonthTasks',
  // date format YYYY-MM-DD
  async (date, thunkAPI) => {
    try {
      const response = await instance.get(`/tasks?month=${date}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDayTasks = createAsyncThunk(
  'tasks/getDayTasks',
  // date format YYYY-MM-DD
  async (date, thunkAPI) => {
    try {
      const response = await instance.get(`/tasks?day=${date}`);
      console.log(response.data);
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
      console.log(response.data);
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
      console.log(response.data);
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
      console.log(response.data);
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
      const response = await instance.patch(`/tasks/${id}/category`, {
        category,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTasksStatistics = createAsyncThunk(
  'tasks/getTasksStatistics',
  async ({ date }, thunkAPI) => {
    try {
      // date format YYYY-MM-DD
      const response = await instance.get(`/tasks/statistics/?day=${date}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

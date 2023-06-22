import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-verq.onrender.com';

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTaskById = createAsyncThunk(
  'tasks/getTaskById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, start, end, priority, category, date }, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', {
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
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (data, thunkAPI) => {}
);

export const changeTaskPriority = createAsyncThunk(
  'tasks/changeTaskPriority',
  async (data, thunkAPI) => {}
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {}
);

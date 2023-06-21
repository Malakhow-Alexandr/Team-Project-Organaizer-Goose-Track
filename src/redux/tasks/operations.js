import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async (_, thunkAPI) => {}
);

export const getTask = createAsyncThunk(
  'tasks/getTask',
  async (id, thunkAPI) => {}
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (data, thunkAPI) => {}
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-verq.onrender.com';

export const getAllReviews = createAsyncThunk(
  'reviews/getAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllReviewsByOwn = createAsyncThunk(
  'reviews/getAllReviewsByOwn ',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews/own');
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createReviewsByOwn = createAsyncThunk(
  'reviews/createReviewsByOwn',
  async ({ raiting, comment }, thunkAPI) => {
    try {
      const response = await axios.post('/reviews/own', { raiting, comment });
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReviewsByOwn = createAsyncThunk(
  'reviews/updateReviewsByOwn ',
  async ({ raiting, comment }, thunkAPI) => {
    try {
      const response = await axios.patch('/reviews/own', { raiting, comment });
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReviewsByOwn = createAsyncThunk(
  'reviews/deleteReviewsByOwn ',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete('/reviews/own');
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

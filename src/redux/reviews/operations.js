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

export const getReviewByOwn = createAsyncThunk(
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

export const createReviewByOwn = createAsyncThunk(
  'reviews/createReviewByOwn',
  async ({ text, rating }, thunkAPI) => {
    try {
      const response = await axios.post('/reviews/own', { text, rating });
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReviewByOwn = createAsyncThunk(
  'reviews/updateReviewByOwn ',
  async ({ text, rating }, thunkAPI) => {
    try {
      const response = await axios.patch('/reviews/own', { text, rating });
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReviewByOwn = createAsyncThunk(
  'reviews/deleteReviewByOwn ',
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getAllReviews = createAsyncThunk(
  'reviews/getAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getReviewByOwn = createAsyncThunk(
  'reviews/getAllReviewsByOwn ',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews/own');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createReviewByOwn = createAsyncThunk(
  'reviews/createReviewByOwn',
  async ({ text, rating }, thunkAPI) => {
    try {
      const response = await instance.post('/reviews/own', { text, rating });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReviewByOwn = createAsyncThunk(
  'reviews/updateReviewByOwn ',
  async ({ text, rating }, thunkAPI) => {
    try {
      const response = await instance.patch('/reviews/own', { text, rating });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReviewByOwn = createAsyncThunk(
  'reviews/deleteReviewByOwn ',
  async (_, thunkAPI) => {
    try {
      const response = await instance.delete('/reviews/own');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

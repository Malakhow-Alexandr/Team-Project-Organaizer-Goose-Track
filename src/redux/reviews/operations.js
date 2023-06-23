import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllReviews = createAsyncThunk(
  'reviews/getAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('');
      console.log(response.data);
      return response.data;
    } catch (error) {}
  }
);

export const getUserReview = createAsyncThunk(
  'reviews/getUserReview',
  async (id, thunkAPI) => {}
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (data, thunkAPI) => {}
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (data, thunkAPI) => {}
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (id, thunkAPI) => {}
);

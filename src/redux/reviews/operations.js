import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';
import { toast } from 'react-hot-toast';
import { tostStyleSuccess } from '../auth/operations';

export const getAllReviews = createAsyncThunk(
  'reviews/getAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews');

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

      toast.success('Thank you, we appreciate your feedback!', {
        style: tostStyleSuccess,
      });
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

      toast.success('Your review has been successfully updated', {
        style: tostStyleSuccess,
      });
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
      toast.success('Your review has been successfully deleted', {
        style: tostStyleSuccess,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

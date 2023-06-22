import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllReviews = createAsyncThunk(
  'reviews/getAllReviews',
  async (_, thunkAPI) => {}
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

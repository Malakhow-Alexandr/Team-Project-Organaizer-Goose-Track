import { createSlice } from '@reduxjs/toolkit';
import {
  getAllReviews,
  getUserReview,
  addReview,
  updateReview,
  deleteReview,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  allReviews: [],
  userReview: {},
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllReviews.pending, handlePending)
      .addCase(getUserReview.pending, handlePending)
      .addCase(addReview.pending, handlePending)
      .addCase(updateReview.pending, handlePending)
      .addCase(deleteReview.pending, handlePending)
      .addCase(getAllReviews.rejected, handleRejected)
      .addCase(getUserReview.rejected, handleRejected)
      .addCase(addReview.rejected, handleRejected)
      .addCase(updateReview.rejected, handleRejected)
      .addCase(deleteReview.rejected, handleRejected);
  },
});

export const reviewsReducer = reviewsSlice.reducer;

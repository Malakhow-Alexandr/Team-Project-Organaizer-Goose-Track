import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../auth/operations';
import {
  getAllReviews,
  getAllReviewsByOwn,
  createReviewsByOwn,
  updateReviewsByOwn,
  deleteReviewsByOwn,
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
  reviewByOwn: {},
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllReviews.pending, handlePending)
      .addCase(getAllReviewsByOwn.pending, handlePending)
      .addCase(createReviewsByOwn.pending, handlePending)
      .addCase(updateReviewsByOwn.pending, handlePending)
      .addCase(deleteReviewsByOwn.pending, handlePending)
      .addCase(getAllReviews.rejected, handleRejected)
      .addCase(getAllReviewsByOwn.rejected, handleRejected)
      .addCase(createReviewsByOwn.rejected, handleRejected)
      .addCase(updateReviewsByOwn.rejected, handleRejected)
      .addCase(deleteReviewsByOwn.rejected, handleRejected)
      .addCase(getAllReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.allReviews = payload;
      })
      .addCase(getAllReviewsByOwn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviewByOwn = payload;
      })
      .addCase(createReviewsByOwn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviewByOwn = payload;
      })
      .addCase(updateReviewsByOwn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviewByOwn = payload;
      })
      .addCase(deleteReviewsByOwn.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.reviewByOwn = {};
      })
      .addCase(logoutUser.fulfilled, state => {
        state.allReviews = [];
        state.reviewByOwn = {};
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../auth/operations';
import {
  getAllReviews,
  getReviewByOwn,
  createReviewByOwn,
  updateReviewByOwn,
  deleteReviewByOwn,
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
      .addCase(getReviewByOwn.pending, handlePending)
      .addCase(createReviewByOwn.pending, handlePending)
      .addCase(updateReviewByOwn.pending, handlePending)
      .addCase(deleteReviewByOwn.pending, handlePending)
      .addCase(getAllReviews.rejected, handleRejected)
      .addCase(getReviewByOwn.rejected, handleRejected)
      .addCase(createReviewByOwn.rejected, handleRejected)
      .addCase(updateReviewByOwn.rejected, handleRejected)
      .addCase(deleteReviewByOwn.rejected, handleRejected)
      .addCase(getAllReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.allReviews = payload;
      })
      .addCase(getReviewByOwn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviewByOwn = payload;
      })
      .addCase(createReviewByOwn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviewByOwn.push(payload);
      })
      .addCase(updateReviewByOwn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviewByOwn = payload;
      })
      .addCase(deleteReviewByOwn.fulfilled, state => {
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

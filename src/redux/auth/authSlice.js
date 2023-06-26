import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updateUser,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const newUser = {
  _id: '',
  name: '',
  email: '',
  avatarURL: '',
  avatarID: '',
  phone: '',
  birthday: '',
  skype: '',
};

const initialState = {
  user: newUser,
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(loginUser.pending, handlePending)
      .addCase(updateUser.pending, handlePending)
      .addCase(logoutUser.pending, handlePending)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = newUser;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(currentUser.fulfilled, (state, { payload }) => {
        if (payload.accessToken) {
          state.accessToken = payload.accessToken;
        } else {
          state.user = { ...state.user, ...payload };
        }
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const { updateAccessToken } = authSlice.actions;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

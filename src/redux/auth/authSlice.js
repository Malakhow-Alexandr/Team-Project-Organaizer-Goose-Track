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
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = newUser;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
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

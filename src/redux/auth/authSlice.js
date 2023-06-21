import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, logIn, logOut, refresh, updateUser } from './operations';

const newUser = {
  name: '',
  email: '',
  avatar: '',
  phone: '',
  birthDate: '',
  skype: '',
};

const initialState = {
  user: newUser,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

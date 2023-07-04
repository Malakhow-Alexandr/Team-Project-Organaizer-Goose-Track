import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const instance = axios.create({
  baseURL: 'https://goose-track-verq.onrender.com',
});

const setToken = accessToken => {
  if (accessToken) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
  }
  return (instance.defaults.headers.common.Authorization = '');
};

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (originalRequest.url === '/logout') return Promise.reject(error);
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await instance.post('/refresh', { refreshToken });
        setToken(response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${response.data.accessToken}`;
        return instance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const tostStyleError = {
  borderRadius: '8px',
  background: '#13151A',
  color: '#3E85F3',
};

export const tostStyleSuccess = {
  borderRadius: '8px',
  background: '#3E85F3',
  color: '#ffffff',
};

export const registerUser = createAsyncThunk(
  'auth/registerUser ',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await instance.post('/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setToken(response.data.accessToken);
      toast.success(`Welcome, ${response.data.user.name}!`, {
        style: tostStyleSuccess,
      });
      return response.data;
    } catch (error) {
      toast.error(
        `Registration failed!😕 Please check your information and try again!`,
        {
          style: tostStyleError,
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser ',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await instance.post('/login', { email, password });
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setToken(response.data.accessToken);
      toast.success(`Welcome back, ${response.data.user.name}!`, {
        style: tostStyleSuccess,
      });
      return response.data;
    } catch (error) {
      toast.error(`Invalid email or password!😕 Try again!`, {
        style: tostStyleError,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await instance.post('/logout');
      setToken();
    } catch (error) {
      if (error.response.status === 401) {
        setToken();
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setToken(persistedToken);

    try {
      const response = await instance.get('/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser ',
  async ({ avatar, name, birthday, phone, telegram, email }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      if (avatar !== undefined) {
        formData.append('avatar', avatar);
      }
      formData.append('phone', phone);
      formData.append('telegram', telegram);
      formData.append('birthday', birthday);

      const response = await instance.patch('/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(`Your account has been updated!`, {
        style: tostStyleSuccess,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ password, newPassword }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Token is invalid');
    }
    try {
      const response = await instance.patch('/changePassword', {
        password,
        newPassword,
      });
      toast.success(`Your password has been changed!`, {
        style: tostStyleSuccess,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

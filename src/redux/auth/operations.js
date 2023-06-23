import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-verq.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

export const registerUser = createAsyncThunk(
  'auth/registerUser ',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/register', {
        name,
        email,
        password,
      });
      console.log(response.data);
      setAuthHeader(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser ',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
      setAuthHeader(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await axios.post('/logout');
      clearAuthHeader();
    } catch (error) {
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
    setAuthHeader(persistedToken);

    try {
      const response = await axios.get('/current');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Не готово
export const updateUser = createAsyncThunk(
  'auth/updateUser ',
  async ({ username, birthday, phone, skype, email }, thunkAPI) => {
    try {
      // const formData = new FormData();
      // formData.append('avatar', avatar);
      // formData.append('name', username);
      // formData.append('email', email);
      // formData.append('phone', phone || '');
      // formData.append('skype', skype || '');
      // formData.append('birthday', dateRegex.test(birthday) ? birthday : '');

      // const response = await axios.patch('/users/update', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      const response = await axios.patch('/update', {
        username,
        birthday,
        phone,
        skype,
        email,
      });
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

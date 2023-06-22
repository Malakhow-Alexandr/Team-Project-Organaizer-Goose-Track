import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-verq.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registerUser ',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      return response.data;
      // setAuthHeader(data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser ',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', { email, password });
      console.log(response.data);
      setAuthHeader(response.data);
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
      await axios.post('/users/signout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader('TOKEN');

    try {
      const response = await axios.get('');
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

export const updateUser = createAsyncThunk(
  'auth/updateUser ',
  async ({ username, birthday, phone, skype, email }, thunkAPI) => {
    try {
      // const formData = new FormData();
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

      const response = await axios.patch('/users/update', {
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

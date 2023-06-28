import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { updateAccessToken } from './authSlice';

export const instance = axios.create({
  baseURL: 'https://goose-track-verq.onrender.com',
});

const setToken = accessToken => {
  if (accessToken) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
  }
  return (instance.defaults.headers.common.Authorization = '');
};

// const setToken = accessToken => (dispatch, state) => {
//   if (accessToken) {
//     dispatch(updateAccessToken(accessToken));
//     return (instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
//   }
//   return (instance.defaults.headers.common.Authorization = '');
// };

const tostStyle = {
  borderRadius: '8px',
  background: '#13151A',
  color: '#3E85F3',
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
      console.log(response.data);
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error(
        `Registration failed!😕 Please check your information and try again!`,
        {
          style: tostStyle,
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
      console.log(response.data);
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error(`Invalid login credentials!😕 Try again!`, {
        style: tostStyle,
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
  async ({ avatar, name, birthday, phone, skype, email }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('avatar', avatar);
      formData.append('phone', phone);
      formData.append('skype', skype);
      formData.append('birthday', birthday);

      const response = await instance.patch('/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

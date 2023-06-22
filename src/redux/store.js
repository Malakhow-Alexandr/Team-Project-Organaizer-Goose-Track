import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { persistedAuthReducer } from './auth/authSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { reviewsReducer } from './reviews/reviewsSlice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    tasks: tasksReducer,
    reviews: reviewsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

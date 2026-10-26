import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/apiSlice';
import authReducer, { USER_STORAGE_KEY } from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Keep the logged-in user in localStorage so a page refresh doesn't log you out.
store.subscribe(() => {
  const { user } = store.getState().auth;
  if (user) localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  else localStorage.removeItem(USER_STORAGE_KEY);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

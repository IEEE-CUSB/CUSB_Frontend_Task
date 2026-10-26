import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/apiSlice';
import type { User } from '../../types';

export const USER_STORAGE_KEY = 'cusb_user';

interface AuthState {
  user: User | null;
}

function loadUser(): User | null {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: loadUser() } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addMatcher(api.endpoints.logout.matchFulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;

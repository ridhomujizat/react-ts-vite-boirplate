import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

interface AuthState {
  token: string | null;
  profile: any;
}

const initialState: AuthState = {
  token: "",
  profile: null,
};

const uiSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setToken(state: AuthState, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    clearToken(state: AuthState) {
      state = initialState;
    },
  },
});

// Action
export const uiAction = uiSlice.actions;

// Selector
export const selectUIToast = (state: RootState) => state.ui.toast;

// Reducer
const uiReducer = uiSlice.reducer;
export default uiReducer;

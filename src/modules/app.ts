import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AppState {
  loaded: boolean;
  loggedIn: boolean;
  uid: string;
}

// Define the initial state using that type
const initialState: AppState = {
  loaded: false,
  loggedIn: false,
  uid: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.loaded = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setUid: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
  },
});

export const { setLoaded, setLoggedIn, setUid } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.app;

export default appSlice.reducer;

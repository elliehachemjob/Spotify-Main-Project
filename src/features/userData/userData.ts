import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  token: any;
  id: any;
}

const initialState: CounterState = {
  token: 0,
  id: 0,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    TokenSaver: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
    IdSaver: (state, action: PayloadAction<any>) => {
      state.id = action.payload;
    },
  },
});

export const { TokenSaver, IdSaver } = userDataSlice.actions;

export const tokenSelector = (state: RootState) => state.userData.token;
export const idSelector = (state: RootState) => state.userData.id;

export default userDataSlice.reducer;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userDataReducer from "../features/userData/userData";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./../features/login/loginSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

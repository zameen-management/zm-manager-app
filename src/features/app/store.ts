import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./property.slice";
import authSlice from "./auth.slice";

export const store = configureStore({
	reducer: {
		properties: propertySlice,
		auth: authSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

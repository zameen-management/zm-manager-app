import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./property.slice";

export const store = configureStore({
	reducer: {
		properties: propertySlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

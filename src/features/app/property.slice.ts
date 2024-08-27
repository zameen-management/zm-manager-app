import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Property } from "../models/Property.model";
import { RootState } from "./store";

interface InitialState {
	property: Property | undefined;
}

const initialState: InitialState = {
	property: undefined,
};

const propertySlice = createSlice({
	name: "properties",
	initialState,
	reducers: {
		setProperty(state, action: PayloadAction<Property>) {
			state.property = action.payload;
		},
	},
});

export const { setProperty } = propertySlice.actions;

export const getProperty = (state: RootState) => state.properties.property;

export default propertySlice.reducer;

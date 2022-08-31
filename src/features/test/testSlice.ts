import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRows} from "./testAPI";

export interface TestSlice {
    value: number;
}

const initialState: TestSlice = {
    value: 0
}

export const testSlice = createSlice({
   name: 'test',
   initialState,
   reducers: {
       click: (state) => {
           console.log(state.value);
           state.value += 5;
       },
       superClick: (state, action: PayloadAction<number>) => {
           state.value += action.payload;
       }
   },

    extraReducers: (builder => {
        builder
            .addCase(asyncAction.pending, state => {
                console.log('kek')
            })
            .addCase(asyncAction.fulfilled, (state, action) => {
                console.log('full', action.payload);
            })
            .addCase(asyncAction.rejected, state => {
                console.log('rejected');
            })
    })
});

export const asyncAction = createAsyncThunk(
    'test/asyncAction',
    async () => {
        const response = await fetchRows();
        console.log(response);
    }
);

export const {click, superClick} = testSlice.actions;

export default testSlice.reducer;
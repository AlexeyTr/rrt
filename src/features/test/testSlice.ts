import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRows} from "./testAPI";

interface MOEX_RESPONSE {
    columns: Array<String>,
    data: Array<Array<any>>
}

let securities: MOEX_RESPONSE = {
    columns: [],
    data: []
}

let marketData: MOEX_RESPONSE = {
    columns: [],
    data: []
}

export interface TestSlice {
    value: number;
    rows: Array<any>,
    marketData: MOEX_RESPONSE,
    securities: MOEX_RESPONSE
}

const initialState: TestSlice = {
    value: 0,
    rows: [],
    marketData: marketData,
    securities: securities
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
            .addCase(asyncAction.pending, state => {})
            .addCase(asyncAction.fulfilled, (state, action) => {
                console.log('data', action.payload);
                state.marketData = action.payload.marketData;
                state.securities = action.payload.securities;
            })
            .addCase(asyncAction.rejected, state => {
                console.log('rejected');
            })
    })
});

export const asyncAction = createAsyncThunk(
    'test/asyncAction',
    async () => {
        return await fetchRows();
    }
);

export const {click, superClick} = testSlice.actions;

export default testSlice.reducer;
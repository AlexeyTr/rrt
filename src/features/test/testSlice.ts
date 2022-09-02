import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRows} from "./testAPI";

interface MOEXType {
    columns: Array<String>,
    data: Array<Array<any>>
}

export interface Asset {
    name?: string,
    title: string,
    value?: number
}

const assets = [
    {name: 'SBER', title: 'Сбербанк', value: 252.85},
    {name: 'GAZP', title: 'Газпром', value: 287.86},
    {name: 'LKOH', title: 'Лукойл', value: 6245.5},
    {name: 'ROSN', title: 'Роснефть', value: 440.89},
    {name: 'CHMF', title: 'Северсталь', value: 1372.8},
    {name: 'YNDX', title: 'Яндекс', value: 3527.6},
    {name: 'POLY', title: 'Полиметалл', value: 1150.3},
    {name: 'NVTK', title: 'Новатек', value: 1439.6},
    {name: 'NLMK', title: 'НЛМК', value: 214.82},
    {name: 'MAGN', title: 'ММК', value: 52.670},
    {name: 'ALRS', title: 'Алроса', value: 97.04},
    {name: 'HHRU', title: 'HeadHunter', value: 3148},
]

export interface TestSlice {
    value: number;
    rows: Array<any>,
    assets: Array<Asset>,
    marketData: MOEXType,
    securities: MOEXType,
}

const initialState: TestSlice = {
    value: 0,
    rows: [],
    assets: assets,
    marketData: {columns: [], data: []},
    securities: {columns: [], data: []},
}

export const testSlice = createSlice({
   name: 'test',
   initialState,
   reducers: {
       click: (state) => {
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
                state.marketData = action.payload.marketdata;
                state.securities = action.payload.securities;
            })
            .addCase(asyncAction.rejected, state => {
                console.log('rejected');
            })
    })
});

export const asyncAction = createAsyncThunk(
    'test/asyncAction',
    async (props : object) => {
        return await fetchRows(props);
    }
);

export const {click, superClick} = testSlice.actions;

export default testSlice.reducer;
import {getAllMaids, editMaid, deleteMaid} from './operation';
import { createSlice } from '@reduxjs/toolkit';

const maidsSlice = createSlice({
    name: 'maids',
    initialState: {
        maids: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(getAllMaids.pending, (state) => {
            state.error = false,
            state.isLoading = true
        })
        .addCase(getAllMaids.fulfilled, (state, action) => {
            state.maids = action.payload,
            state.error = false,
            state.isLoading = true
        })
        .addCase(getAllMaids.rejected, (state) => {
            state.error = true,
            state.isLoading = true
        })
        .addCase(editMaid.pending, (state) => {
            state.error = false,
            state.isLoading = true
        })
        .addCase(editMaid.fulfilled, (state, action) => {
         state.maids = action.payload;
        })
        .addCase(editMaid.rejected, (state) => {
            state.error = true,
            state.isLoading = true
        })
        .addCase(deleteMaid.pending, (state) => {
            state.error = false,
            state.isLoading = true
        })
        .addCase(deleteMaid.fulfilled, (state, action) => {
            state.maids = action.payload;
        })
        .addCase(deleteMaid.rejected, (state) => {
            state.error = true,
            state.isLoading = true
        })
    }
})

export const maidsReducer = maidsSlice.reducer;
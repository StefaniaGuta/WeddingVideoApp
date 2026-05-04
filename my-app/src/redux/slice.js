import { getAllGuests, oneGuest, editGuest, deleteGuest, postGuests } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const guestsSlice = createSlice({
    name: 'guests',
    initialState: {
        guests: {
          isLoading: false,
          error: null,
        },
      },
    extraReducers: builder => {
      builder
        .addCase(getAllGuests.fulfilled, (state, action) => {
         state.guests = action.payload;
        })
        .addCase(getAllGuests.pending, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(getAllGuests.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload; 
          })
          .addCase(oneGuest.fulfilled, (state, action) => {
         state.guests = action.payload;
        })
        .addCase(oneGuest.pending, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(oneGuest.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(editGuest.fulfilled, (state, action) => {
         state.guests = action.payload;
        })
        .addCase(editGuest.pending, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(editGuest.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
           .addCase(deleteGuest.fulfilled, (state, action) => {
            state.guests = action.payload;
        })
        .addCase(deleteGuest.pending, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteGuest.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(postGuests.fulfilled, (state, action) => {
         state.guests.push(action.payload);
        })
        .addCase(postGuests.pending, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(postGuests.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload; 
          })
        
    },
  });
  
  export const guestReducer = guestsSlice.reducer;
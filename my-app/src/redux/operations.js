import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =  'http://localhost:5000/api';

export const getAllGuests = createAsyncThunk(
  'guests/getAllGuests',
  async (_, thunkAPI) => {
    try{
      const response = await axios.get('/guests');
      return response.data;
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const oneGuest = createAsyncThunk(
  'guests/oneGuest',
  async (id, thunkAPI) => {
    try{
      const response = await axios.get(`/guest/${id}`);
        return response.data;
      
    } catch (e){
       return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const editGuest = createAsyncThunk(
  'guests/editGuest',
  async(guestData,thunkAPI) => {
    try{
      const {id, formData} = guestData
      const response = await axios.patch(`/guest/${id}`, formData);
      return response.data;
    } catch(e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const deleteGuest = createAsyncThunk(
  'guests/deleteGuest',
  async(id,thunkAPI) => {
    try{
      const response = await axios.delete(`/guest/${id}`);
      return response.data;
    } catch(e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const postGuests = createAsyncThunk(
  'guests/postGuests',
  async(credentials, thunkAPI) => {
    try{
      const response = await axios.post('/guests', credentials);
      console.log("operation-response",response)
      return response.data
    } catch(e){
      console.log(e)
      return thunkAPI.rejectWithValue(e)
    }
  }
)


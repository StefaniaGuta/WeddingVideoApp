import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =  'http://localhost:5000/api';

export const getAllMaids = createAsyncThunk(
  'maids/getAllMaids',
  async (_, thunkAPI) => {
    try{
      const response = await axios.get('/maids');
      return response.data;
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editMaid = createAsyncThunk(
  'maids/editMaid',
  async(maidData, thunkAPI) => {
    try{
      const {id, formData} = maidData;
      const response = await axios.patch(`/maids/${id}`, formData);
      console.log(response.data)
      return response.data;
    } catch(e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const deleteMaid = createAsyncThunk(
  'maids/deleteMaid',
  async(id, thunkAPI) => {
    try{
      const response = await axios.delete(`/maids/${id}`);
      console.log(response.data)
      return response.data;
    } catch(e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const postMaids = createAsyncThunk(
  'maids/postMaids',
  async(credentials, thunkAPI) => {
    try{
      const response = await axios.post('/maids', credentials);
      console.log("operation-response",response)
      return response.data
    } catch(e){
      console.log(e)
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const getOneMaid = createAsyncThunk(
  'maids/getOneMaid',
  async(id, thunkAPI) => {
    try{
      const response = await axios.get(`/maids/${id}`);
      return response.data

    } catch(e){
      console.log(e);
      return thunkAPI.rejectWithValue(e)
    }
  }
)
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContact = createAsyncThunk(
  "contact/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", credentials);
      return res.data;
    } catch (error) {
      const statusCode = error.response ? error.response.status : 500;
      return thunkAPI.rejectWithValue({
        message: error.message,
        statusCode,
      });
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/${contactId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

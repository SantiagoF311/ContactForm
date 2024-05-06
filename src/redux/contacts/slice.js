import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContact, deleteContact } from "./operations";

const contactInitialState = {
  items: {
    data: {
      contact: [],
    },
  },
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  extraReducers: (builder) => {
    builder
      //fetchContact
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.rejected, handleRejected)
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      //addContact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (!state.items.data.contact) {
          state.items.data.contact = [];
        }
        state.items.data.contact.push(action.payload);
      })

      //deleteContact

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.data.contact.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.data.contact.splice(index, 1);
      });
  },
});

export const contactsReducer = contactSlice.reducer;

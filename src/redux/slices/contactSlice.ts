import { AddContactAction, DeleteContactAction } from "./../../types/redux";
import { ContactType } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";

const contactState: ContactType[] = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactState,

  reducers: {
    addContact: {
      reducer(state: ContactType[], action: AddContactAction) {
        let checkAdd = true;

        state.forEach((c) => {
          if (c.phone == action.payload.phone) {
            checkAdd = false;
            c.name = action.payload.name;
          }
        });
        if (checkAdd) {
          state.push(action.payload);
        }
      },
      prepare(contact: ContactType) {
        return {
          payload: contact,
        };
      },
    },

    deleteContact: {
      reducer(state: ContactType[], action: DeleteContactAction) {
        state.forEach((c, i) => {
          if (action.payload == c.phone) {
            state.splice(i, 1);
          }
        });
      },
      prepare(phone: string) {
        return {
          payload: phone,
        };
      },
    },
  },
});

export const { deleteContact, addContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

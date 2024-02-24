import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setFilter = createAction('filter/set');

const BASE_URL = 'https://609a077031037e00174d425e.mockapi.io';

const CONTACTS_ENDPOINT = '/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async () => {
    const response = await axios.get(BASE_URL + CONTACTS_ENDPOINT);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/save',
  async contact => {
    const response = await axios.post(BASE_URL + CONTACTS_ENDPOINT, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/remove',
  async id => {
    await axios.delete(BASE_URL + CONTACTS_ENDPOINT + `/${id}`);
    return id;
  }
);

//Akcje to obiekty, które opisują zmianę stanu aplikacji. Mam trzy akcje: addContact, deleteContact, setFilter. Redux Toolkit pozwala na tworzenie akcji za pomocą 'createAction'
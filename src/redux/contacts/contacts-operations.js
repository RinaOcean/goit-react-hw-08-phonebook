import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:3001';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest);

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

export const addContact = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

export const removeContact = contactID => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${contactID}`)
    .then(() => dispatch(removeContactSuccess(contactID)))
    .catch(error => dispatch(removeContactError(error.message)));
};

import {
  GET_CONTACTS,
  GET_CONTACT,
  LOAD_CONTACTS,
  FAIL_CONTACTS,
} from "../actionTypes/contact";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contact");
    console.log(result);
    dispatch({ type: GET_CONTACTS, payload: result.data }); //{message:"",response:[]}
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};

export const postContact = (newUser) => async (dispatch) => {
    try {
        await axios.post("/api/contact", newUser)
        dispatch(getContacts());
    } catch (error) {
        dispatch({
            type: FAIL_CONTACTS,
            payload: error.response,
        })
    }
}

export const editContact = (id, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, newContact);
    dispatch(getContacts());
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts());
    } catch (error) {
        dispatch({
            type: FAIL_CONTACTS,
            payload: error.response
        })
    }
}

export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/contact/${id}`);
    console.log(result)
    dispatch({type:GET_CONTACT, payload:result.data})
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};
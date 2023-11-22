import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://651310488e505cebc2e98726.mockapi.io/contacts";

export const fetchContact = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/users");
    dispatch(fetchingSuccess(response.data));
  } catch (err) {
    dispatch(fetchingError(err.message));
  }
};

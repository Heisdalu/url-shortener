import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { error: false, data: {}, message: null };

const shortenLinkSlice = createSlice({
  name: "shortenLink",
  initialState,
  reducers: {
    shortenLinkSuccess(state, action) {
        console.log(state, action);
      state.error = false;
      state.data = action.payload.data;
      state.message = null;
    },
    shortenLinkFailure(state, action) {
      state.error = true;
      state.data = {};
      state.message = action.payload.message;
    },
  },
});

const shortenLinkAction = shortenLinkSlice.actions;
const store = configureStore(shortenLinkSlice);

export const getShortenLink = (link = {}) => {
  console.log(link);
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://api.shrtco.de/v2/shorten?url=google.com"
      );
      dispatch(
        shortenLinkAction.shortenLinkSuccess({
          data: res.data,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(
        shortenLinkAction.shortenLinkFailure({
          message: err.message,
        })
      );
    }
  };
};

export default store;

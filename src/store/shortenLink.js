import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: false,
  data: [
    {
      shortLink: "lol",
      originalLink: "gee",
      id: `${Math.random().toString(36)}`,
    },
    {
      shortLink: "shee.ckd",
      originalLink: "google.com",
      id: `${Math.random().toString(36)}`,
    },
  ],
  message: null,
};

const shortenLinkSlice = createSlice({
  name: "shortenLink",
  initialState,
  reducers: {
    shortenLinkSuccess(state, action) {
      console.log(state, action);
      state.error = false;
      state.data.push(action.payload);
      state.message = null;
    },
    shortenLinkFailure(state, action) {
      state.error = true;
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
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      console.log(res);
      dispatch(
        shortenLinkAction.shortenLinkSuccess({
          shortLink: res.data.result.short_link,
          originalLink: res.data.result.original_link,
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

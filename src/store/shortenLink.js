import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
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
      state.loading = false;
    },
    shortenLinkFailure(state, action) {
      state.loading = false;
      state.error = true;
      state.message = action.payload.message;
    },
    shortenLinkLoading(state, action) {
      state.loading = true;
    },
  },
});

const shortenLinkAction = shortenLinkSlice.actions;
const store = configureStore(shortenLinkSlice);

export const getShortenLink = (link = {}) => {
  return async (dispatch) => {
    dispatch(shortenLinkAction.shortenLinkLoading())
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      console.log(res);
      dispatch(
        shortenLinkAction.shortenLinkSuccess({
          id: `${Math.random().toString(36)}`,
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

import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  data: [],
  message: null,
};

const shortenLinkSlice = createSlice({
  name: "shortenLink",
  initialState,
  reducers: {
    shortenLinkSuccess(state, action) {
      state.error = false;
      state.data.unshift(action.payload);
      state.message = null;
      state.loading = false;
    },
    shortenLinkFailure(state, action) {
      state.loading = false;
      state.error = true;
      state.message = action.payload.message;
    },
    shortenLinkLoading(state) {
      state.loading = true;
    },
    shortenLinkReset(state) {
      state.message = "";
      state.error = false;
      state.loading = false;
    },
  },
});

export const shortenLinkAction = shortenLinkSlice.actions;
const store = configureStore(shortenLinkSlice);

export const getShortenLink = (link = {}) => {
  return async (dispatch) => {
    dispatch(shortenLinkAction.shortenLinkLoading());
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      dispatch(
        shortenLinkAction.shortenLinkSuccess({
          id: `${Math.random().toString(36)}`,
          shortLink: res.data.result.short_link,
          originalLink: res.data.result.original_link,
        })
      );
    } catch (err) {
      dispatch(
        shortenLinkAction.shortenLinkFailure({
          message: err.message,
        })
      );
    }
  };
};

export default store;

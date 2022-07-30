import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShortenLink, shortenLinkAction } from "../../store/shortenLink";
import "./GetLink.css";
import Loader from "./Loader";

const GetLink = () => {
  const dispatch = useDispatch();
  const [inputLink, setInputLink] = useState("");
  const loadingState = useSelector((state) => state.loading);
  const state = useSelector((state) => state);


  const inputHandler = (e) => {
    setInputLink(e.target.value);
  };

  const shortenLinkHandler = () => {
    if (inputLink) {
      dispatch(getShortenLink(inputLink));
    }
    setInputLink("");
  };

  const exitErrorModalHandler = () => {
    dispatch(shortenLinkAction.shortenLinkReset());
  };

  return (
    <div className="input_label">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="input_text"
        arial-label="Enter url"
        onChange={inputHandler}
        value={inputLink}
      />
      <button type="submit" className="input_btn" onClick={shortenLinkHandler}>
        {loadingState ? <Loader /> : "Shorten It!"}
      </button>
      {state.error && (
        <div className="error-page">
          <h1 className="error_header"> {state.message}</h1>
          <button className="error_exit" onClick={exitErrorModalHandler}>
            Go back
          </button>
        </div>
      )}
      ;
    </div>
  );
};

export default GetLink;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShortenLink } from "../../store/shortenLink";
import "./GetLink.css";
import Loader from "./Loader";

const GetLink = () => {
  const dispatch = useDispatch();
  const [inputLink, setInputLink] = useState("");
  const loadingState = useSelector((state) => state.loading);

  console.log(loadingState);

  const inputHandler = (e) => {
    setInputLink(e.target.value);
  };

  const shortenLinkHandler = () => {
    console.log(inputLink);
    if (inputLink) {
      dispatch(getShortenLink(inputLink));
    }
    setInputLink("");
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
      
      <div className="error-page">
         <h1 className="error_header"> Input a Valid url</h1>
         <button className="error_exit">Exit</button>
      </div>
      ;
    </div>
  );
};

export default GetLink;

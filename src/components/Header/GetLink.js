import { useState } from "react";
import { useDispatch } from "react-redux";
import { getShortenLink } from "../../store/shortenLink";
import "./GetLink.css";

const GetLink = () => {
  const dispatch = useDispatch();
  const [inputLink, setInputLink] = useState("");

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
        Shorten It!
      </button>
    </div>
  );
};

export default GetLink;

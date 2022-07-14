import "./GetLink.css";
import { useDispatch, useSelector } from "react-redux";
import { getShortenLink } from "../../store/shortenLink";

const GetLink = () => {
  const dispatch = useDispatch();
  const val = useSelector((state) => state);
  console.log(val);


  const shortenLinkHandler = () => {
    dispatch(getShortenLink());
  };

  return (
    <div className="input_label">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="input_text"
        arial-label="Enter url"
      />
      <button type="submit" className="input_btn" onClick={shortenLinkHandler}>
        Shorten It!
      </button>
    </div>
  );
};

export default GetLink;

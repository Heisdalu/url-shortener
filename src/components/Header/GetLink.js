import "./GetLink.css";

const GetLink = () => {
  return (
    <div className="input_label">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="input_text"
        arial-label="Enter url"
      />
      <button type="submit" className='input_btn'>Shorten It!</button>
    </div>
  );
};

export default GetLink;

import "./LinkDetail.css";

const LinkDetail = () => {
  const coppyHandler = (el) => {
    document.querySelectorAll(".copy_btn").forEach((el) => {
      el.classList.remove("copied_active");
      el.textContent = "Copy";
    });
    el.target.classList.add("copied_active");
    el.target.textContent = "Copied";
    navigator.clipboard.writeText("Jesus");
  };

  return (
    <>
      <div className="detail_link_content">
        <div className="main_content">{"gddddm"}</div>
        <div className="shorten_link">{"djdjdjdjjdjdjdjdj"}</div>
        <button
          arial-role="copy"
          className="copy_btn"
          onClick={coppyHandler}
          id="btn1"
        >
          Copy
        </button>
      </div>
      <div className="detail_link_content">
        <div className="main_content">{"gddddm"}</div>
        <div className="shorten_link">{"djdjdjdjjdjdjdjdj"}</div>
        <button
          arial-role="copy"
          className="copy_btn"
          onClick={coppyHandler}
          id="btn2"
        >
          Copy
        </button>
      </div>
      <div className="detail_link_content">
        <div className="main_content">{"gddddm"}</div>
        <div className="shorten_link">{"djdjdjdjjdjdjdjdj"}</div>
        <button
          arial-role="copy"
          className="copy_btn"
          onClick={coppyHandler}
          id="btn3"
        >
          Copy
        </button>
      </div>
    </>
  );
};

export default LinkDetail;

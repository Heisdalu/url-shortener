import { useSelector } from "react-redux";
import "./LinkDetail.css";

const LinkDetail = () => {
  const data = useSelector((state) => state.data);
  console.log(data);

  const linkContent = (detail) => {
    const copyHandler = (el) => {
      document.querySelectorAll(".copy_btn").forEach((el) => {
        el.classList.remove("copied_active");
        el.textContent = "Copy";
      });
      el.target.classList.add("copied_active");
      el.target.textContent = "Copied";
      navigator.clipboard.writeText(detail.shortLink);
    };

    return (
      <div className="detail_link_content" key={detail.id}>
        <div className="main_content">{detail?.originalLink}</div>
        <div className="shorten_link">{detail?.shortLink}</div>
        <button
          arial-role="copy"
          className="copy_btn"
          onClick={copyHandler}
          id="btn1"
        >
          Copy
        </button>
      </div>
    );
  };

  return <>{data.map((el, i) => linkContent(el))}</>;
};

export default LinkDetail;

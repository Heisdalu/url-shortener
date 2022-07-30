import "./Detail.css";
import Image1 from "../../assets/icon-brand-recognition.svg";
import Image2 from "../../assets/icon-detailed-records.svg";
import GetLink from "./GetLink";
import LinkDetail from "./LinkDetail";

const Detail = () => {
  return (
    <section className="detail_box">
      <section className="detail_link">
        <GetLink />

     <div className="detail_link_content_box">
        <LinkDetail />

     </div>
      </section>

      <section className="detail_box1">
        <header className="detail_header">
          <h1 className="detail_header_title">Advanced Statisitcs</h1>
          <p className="detail_header_text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </header>

        <section className="main_detail">
          <article className="main_detail_box line">
            <figure className="image_logo_box">
              <img src={Image1} alt="" />
            </figure>
            <h1 className="main_detail_title">Brand Recognition</h1>
            <p className="main_detail_content">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>

          <article className="main_detail_box line">
            <figure className="image_logo_box">
              <img src={Image2} alt="" />
            </figure>
            <h1 className="main_detail_title">Detailed Records</h1>
            <p className="main_detail_content">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>

          <article className="main_detail_box">
            <figure className="image_logo_box">
              <img src={Image1} alt="" />
            </figure>
            <h1 className="main_detail_title">Fully Customizable</h1>
            <p className="main_detail_content">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </section>
      </section>

      <div className="other_detail">
        <h1 className="other_detail_title">Boost your links today</h1>
        <button className="other_detail_btn">Get started</button>
      </div>
    </section>
  );
};

export default Detail;

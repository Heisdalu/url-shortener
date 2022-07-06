import Logo from "../../assets/logo.svg";
import Hamburger from "../../assets/illustration-working.svg";
import GetLink from "./GetLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header className="header_box">
        <h1 className="header_title">
          <img src={Logo} alt="Shortly logo" />
        </h1>

        <button className="hamburger">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </button>
      </header>

      <section className="header_contents">
        <figure className="header_bg">
          <img src={Hamburger} alt="" />
        </figure>
        <div className="header_content_box">
          <h1 className="header_title">
            More than just <span>shorter links</span>
          </h1>
          <p className="header_detail">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <button className="header_btn">Get Started</button>
        </div>
      </section>

      <GetLink />
    </div>
  );
};

export default Header;

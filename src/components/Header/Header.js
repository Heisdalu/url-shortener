import Logo from "./Logo";

import Modal from "./Modal";

import Hamburger from "../../assets/illustration-working.svg";
import GetLink from "./GetLink";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div className="header">
      <header className="header_box">
        <h1 className="header_title">
          <Logo color="#34313D" />
        </h1>

        <button className="hamburger" onClick={toggle}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </button>

        <Modal active={active}/>
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

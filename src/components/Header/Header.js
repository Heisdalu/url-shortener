/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "./Logo";

import Modal from "./Modal";

import Hamburger from "../../assets/illustration-working.svg";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const animateBurger = active ? 'burger-line' : ''

  const toggle = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div className="header">
      <header className="header_box">
        <h1 className="header_title">
          <Logo color="#34313D" />
        </h1>

        <nav className="desktop_modal desktop_main_modal">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </nav>

        <div className="desktop_modal desktop_navigate">
          <button>Login</button>
          <button className="desktop_sign_up">Sign Up</button>
        </div>

        <button className="hamburger" arial-role="menu-list" onClick={toggle}>
          <div className={`burger ${animateBurger}`}></div>
          <div className={`burger ${animateBurger}`}></div>
          <div className={`burger ${animateBurger}`}></div>
        </button>

        <Modal active={active} />
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
    </div>
  );
};

export default Header;

import Logo from "../Header/Logo";
import instagram from "../../assets/icon-instagram.svg";
import pinInterest from "../../assets/icon-pinterest.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer_title">
        <Logo color='#fff'/>
      </h1>

      <div className="main_footer">
        <section className="feature">
          <h1 className="main_footer_title">Features</h1>
          <div className="feature_inner">
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
        </section>

        <section className="feature">
          <h1 className="main_footer_title">Resources</h1>
          <div className="feature_inner">
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>
        </section>

        <section className="feature">
          <h1 className="main_footer_title">Company</h1>
          <div className="feature_inner">
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </section>

        <section className="social_media_links">
          <span>
            <img src={facebook} alt="" />
          </span>
          <span>
            <img src={twitter} alt="" />
          </span>
          <span>
            <img src={pinInterest} alt="" />
          </span>
          <span>
            <img src={instagram} alt="" />
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

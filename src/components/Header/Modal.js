/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./Modal.css";

const Modal = (props) => {
  const active = !props.active && `hidden`;
  return (
    <nav className= {`modal ${active}`}>
      <div className="modal_1">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>

      <div className="modal_2">
        <button className="login_btn">Login</button>
        <button className="sign_btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Modal;

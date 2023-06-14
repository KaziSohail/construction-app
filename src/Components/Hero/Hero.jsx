import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h4 className="hero-heading">CROWN INFRA SUPER STRUCTURE</h4>
        </div>
        <div className="right">
          <ul className="right-menu">
            <li>
              <Link to="hero">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="founders">Founders</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="chooseUs">Why Choose Us</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className="hero-Img"
          src="./src/assets/images/hero-img.jpg"
          alt=""
        />
      </div>
      <div className="logo">
        <img className="logo-img" src="./src/assets/images/logo.jpg" alt="" />
      </div>
    </>
  );
};

export default Hero;

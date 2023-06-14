import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-details">
          <h4>Address</h4>
          <img src="./src/assets/images/address.jpg" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer-details">
          <h4>Email Us</h4>
          <img src="./src/assets/images/emailUs.webp" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer-details">
          <h4>Call Now</h4>
          <img src="./src/assets/images/callUs.jpg" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer-details">
          <h4>Follow Us</h4>
          <img src="./src/assets/images/followUs.webp" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

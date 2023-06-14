import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1>CONTACT US</h1>
        <hr />
      </div>
      <div className="contact-details">
        <div>
          <input className="f-name" type="text" placeholder="First Name" />
          <input className="l-name" type="text" placeholder="Last Name" />
        </div>
        <div>
          <input className="email" type="text" placeholder="Email Id" />
          <input className="p.no" type="text" placeholder="Phone No" />
        </div>
        <div>
          <textarea className="message-box" placeholder="Message"></textarea>
        </div>
        <div>
          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

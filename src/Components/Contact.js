import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="cont">
      <h1 className="primary-heading">Есть вопросы?</h1>
      <h1 className="primary-heading">Оставьте их ниже.</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;

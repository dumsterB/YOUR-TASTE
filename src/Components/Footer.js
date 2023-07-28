import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Вопросы</span>
          <span>Тех.Поддержка</span>
          <span>Поделиться</span>
     <span> Отзывы</span>
         
        </div>
        <div className="footer-section-columns">
          <span>+9989909904064</span>
          <span>ksmvezz@gmail.com</span>
          <span>ksmvfood.@gmail.com</span>
          <span>ksmv.ezz@gmail.com </span>
       
        </div>
       
      </div>
    </div>
  );
};

export default Footer;

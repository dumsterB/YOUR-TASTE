import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="test">
      <div className="work-section-top">
        <p className="primary-subheading">Отзывы</p>
        <h1 className="primary-heading">Что в них?</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Я пробовал некоторые из этих блюд в исполнении создателя сайта, но потом решил попробовать приготовить сам и вышло не хуже!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Рафиев Алишер</h2>
      </div>
    </div>
  );
};

export default Testimonial;

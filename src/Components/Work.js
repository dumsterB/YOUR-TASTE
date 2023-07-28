import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Выберите продукты",
      text: "Отметьте те продукты, которые вы не хотели бы видеть в вашем блюде",
    },
    {
      image: ChooseMeals,
      title: "Выберите продукты ",
      text: " Отметьте те продукты, которые у вас имеются",
    },
    {
      image: DeliveryMeals,
      title: " Быстрый деливери",
      text: "Также вы можете оформить доставку любых блюд ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Как это работает?</h1>
        <p className="primary-text">
        Вы выбираете или вводите те продукты которые имеются у вас под рукой, и наша платформа сгенерирует вам названия и рецепты этих блюд.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

import React from "react";
import "./Promo.css";
import promoimage from "../../images/promoimage.svg";

export default function Promo() {
  return (
    <>
      <section className="promo">
        <div className="promo__container">
          <div className="promo__info">
            <h1 className="promo__title  promo__title_hiden">
              {" "}
              Учебный проект студента <br /> факультета <br /> Веб-разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <a className="promo__link" href="#techs">
              Узнать больше
            </a>
          </div>
          <img className="promo__image" src={promoimage} alt="Логотип" />
        </div>
      </section>
    </>
  );
}

import React from "react";
import "./AboutMe.css";
import image from "../../images/12345.jpg";
export default function AboutMe() {
  return (
    <>
      <section className="aboutme">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme__container">
          <div className="aboutme__data">
            <h3 className="aboutme__subtitle">Виталий</h3>
            <p className="aboutme__description">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className="aboutme__link"
              href="https://github.com/vladislavrudrud"
            >
              Github
            </a>
          </div>
          <img className="aboutme__image" src={image} alt="Личная фотография" />
        </div>
      </section>
    </>
  );
}

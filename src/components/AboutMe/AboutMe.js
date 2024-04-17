import React from "react";
import "./AboutMe.css";
import image from "../../images/12345.jpg";
export default function AboutMe() {
  return (
    <>
      <section className="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__container">
          <div className="about-me__data">
            <h3 className="about-me__subtitle">Виталий</h3>
            <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className="about-me__link"
              href="https://github.com/vladislavrudrud"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img className="about-me__image" src={image} alt="Личная фотография" />
        </div>
      </section>
    </>
  );
}

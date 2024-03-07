import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <>
      <section className="techs" id="techs">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__container">
          <h3 className="techs__text">7 технологий</h3>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div className="techs__types">
          <p className="techs__type">HTML</p>
          <p className="techs__type">CSS</p>
          <p className="techs__type">JS</p>
          <p className="techs__type">React</p>
          <p className="techs__type">Git</p>
          <p className="techs__type">Express.js</p>
          <p className="techs__type">mongoDB</p>
        </div>
      </section>
    </>
  );
}

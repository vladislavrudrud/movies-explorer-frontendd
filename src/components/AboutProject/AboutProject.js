import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <>
      <section className="project">
        <h2 className="project__title">О проекте</h2>
        <div className="project__container">
          <div className="project__container-text">
            <h3 className="project__container-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="project__container-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="project__container-text project__container_last">
            <h3 className="project__container-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="project__container-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="project__period">
          <p className="project__period_first">1 неделя</p>
          <p className="project__period_second">4 недели</p>
          <p className="project__period_end">Back-end</p>
          <p className="project__period_end">Front-end</p>
        </div>
      </section>
    </>
  );
}

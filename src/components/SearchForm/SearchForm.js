import Toggle from "../Toggle/Toggle";
import "./SearchForm.css";

export default function SearchForm() {

  return (
    <>
      <section className="search">
        <div className="search__form" id="search">
          <input
            className="search__input"
            id="search"
            type="text"
            placeholder="Фильм"
          ></input>
          <button className="search__button" type="submit">
            Поиск
          </button>
        </div>
        <Toggle/>
      </section>
    </>
  );
}

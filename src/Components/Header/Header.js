import { Schools } from "../Schools/Schools";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className="container">
      <div>
        <h1 className={style.h1}>Harry Potter</h1>
        <p className={style.p}>
          View all characters from the Harry Potter universe.
        </p>
      </div>
      <div className={style.inputsForm}>
        <div>
          <label className={style.labels} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={(style.input, style.inputName)}
            type="text"
            autoComplete="off"
            placeholder="Hermione"
          ></input>
        </div>
        <div>
          <label className={style.labels} htmlFor="school">
            School
          </label>
          <Schools />
        </div>
      </div>
      <hr />
    </header>
  );
}

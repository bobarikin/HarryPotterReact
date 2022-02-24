import { useState, useEffect } from "react";
import style from "./Schools.module.css";

export function Schools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const getSchools = async () => {
      const response = await fetch(
        "http://hp-api.herokuapp.com/api/characters"
      );
      const data = await response.json();
      const schoolsList = [
        ...new Set(
          data.map((elem) => elem.house).filter((elem) => elem !== "")
        ),
      ];
      setSchools(schoolsList);
    };

    getSchools();
  }, []);

  return (
    <select
      className={(style.input, style.inputSchool)}
      defaultValue={"DEFAULT"}
    >
      <option value="DEFAULT" disabled>
        Choose one
      </option>
    </select>
  );
}

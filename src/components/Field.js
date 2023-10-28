import React, { useContext, useState } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const [word, setWord] = useState('')
  const context = useContext(LanguageContext);
  console.log(context, ";k");

  const handleChange = (event) => {
    setWord(event.target.value);
  }

  const labelName = context === "en_US" ? "Name" : "Vorname";
  return (
    <div className="ui form">
      <label>{labelName}: Input</label>
      <input value={word} onChange={(event) => handleChange(event)} />
    </div>
  );
};

export default Field;

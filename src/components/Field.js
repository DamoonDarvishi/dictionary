import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const context = useContext(LanguageContext);
  const labelName = context === "United State" ? "Name" : "Vorname";
  return (
    <div className="ui form">
      <label>{labelName}: </label>
      <input />
    </div>
  );
};

export default Field;

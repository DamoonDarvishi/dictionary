import { useEffect } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import axios from "axios";

const Button = () => {
  const renderSubmit = (value) => {
    return value === "United State" ? "Submit" : "Vorlegen";
  };

  useEffect(() => {
    const dic = async () => {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${"en_US"}/${"Book"}`
      );
      console.log(data);
    };
    dic();
  }, []);

  return (
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(value) => renderSubmit(value)}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;

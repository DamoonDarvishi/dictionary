import { useState, useEffect } from "react";
import SearchWord from "./SearchWord";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import axios from "axios";

const App = () => {
  const [language, setLanguage] = useState("en_US");

  const onlanguagechange = (name) => {
    setLanguage(name);
    console.log(language);
  };
  // https://dictionaryapi.dev/
  useEffect(() => {
    const dic = async () => {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${"Book"}`
      );
      console.log(data);
    };
    dic();
  }, []);

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => onlanguagechange("en_US")} />
        <i className="flag de" onClick={() => onlanguagechange("de")} />
      </div>
      <ColorContext.Provider value="primary">
        <LanguageContext.Provider value={language}>
          <SearchWord />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;

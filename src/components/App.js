import { useState, useEffect } from "react";
import SearchWord from "./SearchWord";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import axios from "axios";
import styles from './app.module.css';

const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

const App = () => {
  const [language, setLanguage] = useState("");

  const onlanguagechange = (name) => {
    setLanguage(name);
  };
  // https://dictionaryapi.dev/
  useEffect(() => {
    const dic = async () => {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${"kitap"}`
      );
      console.log(data);
    };
    dic();
  }, [language]);
  console.log(language);

  return (
    <div className="ui container">
      <div className={styles.dictionaryCard}>
        <p className="">Online Dictionary</p>
      </div>
      <div >
        Select a language:

        <div className="ui">
        <i className="flag us" onClick={() => onlanguagechange("en_US")} />
        <i className="flag de" onClick={() => onlanguagechange("de")} />
        <i className="flag es" onClick={() => onlanguagechange("es")} />
        <i className="flag fr" onClick={() => onlanguagechange("fr")} />
        <i className="flag it" onClick={() => onlanguagechange("it")} />
        <i className="flag tr" onClick={() => onlanguagechange("tr")} />
        </div>
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

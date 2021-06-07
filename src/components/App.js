import { useState } from "react";
import SearchWord from "./searchWord";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const App = () => {
  const [language, setLanguage] = useState("United State");

  const onlanguagechange = (name) => {
    setLanguage(name);
  };
  return (
    <div className="ui container">
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => onlanguagechange("United State")}
        />
        <i
          className="flag de"
          onClick={() => onlanguagechange("Deutschland")}
        />
        <i className="flag ir" onClick={() => onlanguagechange("Iran")} />
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

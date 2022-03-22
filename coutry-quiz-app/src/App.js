import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";
import { CardComponent } from "./components/card";
import { Footer } from "./components/footer";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isFlagAsk, setIsFlagAsk] = useState(true);
  const [answersCorrects, setAnswersCorrects] = useState(0);
  const [failQuestion, setFailQuestion] = useState(false);
  const [isSelectedAOption, setIsSelectedAOption] = useState(false);

  const [capitalCurrent, setCapitalCurrent] = useState("");
  const [countryCurrent, setCountryCurrent] = useState();
  let fourCountries = [];

  useEffect(() => {
    axios("https://restcountries.com/v2/all")
      .then(({ data }) => setAllCountries(data))
      .catch((error) => console.log(error));
  }, []);

  for (let i = 0; i < 4; i++) {
    fourCountries.push(allCountries[Math.ceil(Math.random() * 250)]);
  }

  return (
    <div className="containerMain">
      <div className="figureone"></div>
      <div className="figuretwo"></div>
      <CardComponent
        capitalCurrent={capitalCurrent}
        isSelectedAOption={isSelectedAOption}
        isFlagAsk={isFlagAsk}
        answersCorrects={answersCorrects}
        failQuestion={failQuestion}
        allCountries={allCountries}
        setIsFlagAsk={setIsFlagAsk}
        fourCountries={fourCountries}
      />
      <Footer />
    </div>
  );
}

export default App;

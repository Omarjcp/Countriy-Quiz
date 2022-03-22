import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";
import { CardComponent } from "./components/card";
import { Footer } from "./components/footer";
import { Welcome } from "./components/welcome";
import { LoadingComponent } from "./components/loading";

function App() {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(true);

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
  const onClickStart = (e) => {
    e.preventDefault();
    // axios("https://restcountries.com/v2/all")
    //   .then(({ data }) => setAllCountries(data))
    //   .catch((error) => console.log(error));

    setStart(true);
    setTimeout(() => setLoading(false), 2000);
  };

  for (let i = 0; i < 4; i++) {
    fourCountries.push(allCountries[Math.ceil(Math.random() * 249)]);
  }

  return (
    <div className="containerMain">
      <div className="figureone"></div>
      <div className="figuretwo"></div>
      {!start ? (
        <Welcome onClickStart={onClickStart} />
      ) : loading ? (
        <LoadingComponent />
      ) : (
        <CardComponent
          capitalCurrent={capitalCurrent}
          isSelectedAOption={isSelectedAOption}
          isFlagAsk={isFlagAsk}
          answersCorrects={answersCorrects}
          setAnswersCorrects={setAnswersCorrects}
          failQuestion={failQuestion}
          allCountries={allCountries}
          setIsFlagAsk={setIsFlagAsk}
          fourCountries={fourCountries}
          setAllCountries={setAllCountries}
          setFailQuestion={setFailQuestion}
          setStart={setStart}
          setIsSelectedAOption={setIsSelectedAOption}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

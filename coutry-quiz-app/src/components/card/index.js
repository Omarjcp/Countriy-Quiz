import { useState, useRef } from "react";
import axios from "axios";

import { CardResult } from "./cardResult";

import { Button, Card, Typography } from "antd";
import "./index.scss";

const { Title } = Typography;

export const CardComponent = ({
  capitalCurrent,
  isSelectedAOption,
  isFlagAsk,
  setIsFlagAsk,
  answersCorrects,
  setAnswersCorrects,
  failQuestion,
  allCountries,
  fourCountries,
  setAllCountries,
  setFailQuestion,
  setStart,
  setIsSelectedAOption,
}) => {
  const onNext = () => {
    // e.preventDefault();
    setAllCountries(allCountries);
    setAnswersCorrects(answersCorrects + 1);

    isFlagAsk ? setIsFlagAsk(false) : setIsFlagAsk(true);

    // isSelectedAOption
    //   ? setIsSelectedAOption(false)
    //   : setIsSelectedAOption(true);

    let buttonsWrong = document.querySelectorAll(".answerWrong");
    for (var i = 0; i < buttonsWrong.length; i++) {
      buttonsWrong[i].classList.remove("answerWrong");
    }

    let buttonCorrect = document.querySelector(".answerCorrect");
    buttonCorrect.classList.remove("answerCorrect");
  };

  const onSelectOption = (e) => {
    e.preventDefault();

    let capitalSelected = e.target.id;
    let flagSelected = e.target.name;

    let capital = document.getElementById("capital");
    let flag = document.getElementById("flag");

    if (capitalSelected == capital?.innerText || flagSelected === flag?.src) {
      let buttons = document.getElementsByClassName("buttonOption");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].className += " answerWrong";
      }

      e.target.classList.add("answerCorrect");

      setTimeout(() => onNext(), 2000);

      console.log("si es la capital o la bandera");
    } else {
      e.target.classList.add("answerWrong");
      setTimeout(() => setFailQuestion(true), 1000);
      console.log("no es la capital ni la bandera");
    }
  };

  const positionRandom = fourCountries[Math.floor(Math.random() * 3)];

  return (
    <div style={{ zIndex: "1" }}>
      <Title style={{ color: "#F2F2F2", fontWeight: "700" }}>COUTRY QUIZ</Title>
      {!failQuestion ? (
        <Card bordered={false} className="card">
          {!isFlagAsk ? (
            <>
              <img
                id="flag"
                src={positionRandom?.flag}
                style={{ width: "30%", border: "1px solid grey" }}
              />
              <Title level={3} style={{ color: "#2F527B" }}>
                Which country does this flag belong to?
              </Title>
            </>
          ) : (
            <Title
              level={3}
              style={{ color: "#2F527B", margin: "1.2rem 0 2rem 0" }}
            >
              <span id="capital">{positionRandom?.capital}</span> is the capital
              of
            </Title>
          )}
          <button
            className="buttonOption"
            value={fourCountries[0]?.name}
            id={fourCountries[0]?.capital}
            name={fourCountries[0]?.flag}
            onClick={onSelectOption}
          >
            {fourCountries[0]?.name}
          </button>
          <button
            className="buttonOption"
            value={fourCountries[1]?.name}
            id={fourCountries[1]?.capital}
            name={fourCountries[1]?.flag}
            onClick={onSelectOption}
          >
            {fourCountries[1]?.name}
          </button>
          <button
            className="buttonOption"
            value={fourCountries[2]?.name}
            id={fourCountries[2]?.capital}
            name={fourCountries[2]?.flag}
            onClick={onSelectOption}
          >
            {fourCountries[2]?.name}
          </button>
          <button
            className="buttonOption"
            value={fourCountries[3]?.name}
            id={fourCountries[3]?.capital}
            name={fourCountries[3]?.flag}
            style={{ marginBottom: "2rem" }}
            onClick={onSelectOption}
          >
            {fourCountries[3]?.name}
          </button>
          {/* {isSelectedAOption ? (
            <div className="containerButtomNext">
              <Button className="buttonNext" onClick={onNext}>
                Next
              </Button>
            </div>
          ) : (
            <></>
          )} */}
        </Card>
      ) : (
        <CardResult
          setStart={setStart}
          setAnswersCorrects={setAnswersCorrects}
          answersCorrects={answersCorrects}
          setFailQuestion={setFailQuestion}
        />
      )}
    </div>
  );
};

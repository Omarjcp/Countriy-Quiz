import { useState, useRef } from "react";

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
  failQuestion,
  allCountries,
  fourCountries,
}) => {
  const onNext = (e) => {
    e.preventDefault();

    for (let i = 0; i < 4; i++) {
      fourCountries.unshift(allCountries[Math.ceil(Math.random() * 250)]);
    }
  };

  const onSelectOption = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  let positionRandom = fourCountries[Math.floor(Math.random() * 3)];
  let capital = useRef();
  console.log(fourCountries);

  return (
    <div className="containerCard">
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
              <span id="capital" ref={capital}>
                {fourCountries[Math.floor(Math.random() * 3)]?.capital}{" "}
              </span>
              is the capital of
            </Title>
          )}
          <Button
            block
            className="buttonOption"
            value={fourCountries[0]?.name}
            onClick={onSelectOption}
          >
            <span>A</span> {fourCountries[0]?.name}
          </Button>
          <Button block className="buttonOption" onClick={onSelectOption}>
            <span>B</span> {fourCountries[1]?.name}
          </Button>
          <Button block className="buttonOption" onClick={onSelectOption}>
            <span>C</span> {fourCountries[2]?.name}
          </Button>
          <Button
            block
            className="buttonOption"
            style={{ marginBottom: "2rem" }}
            onClick={onSelectOption}
          >
            <span>D</span> {fourCountries[3]?.name}
          </Button>
          {!isSelectedAOption ? (
            <div className="containerButtomNext">
              <Button className="buttonNext" onClick={onNext}>
                Next
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      ) : (
        <CardResult answersCorrects={answersCorrects} />
      )}
    </div>
  );
};

import { useState } from "react";

import { Button, Card, Typography } from "antd";
import "./index.scss";

const { Title } = Typography;

export const CardComponent = () => {
  const [isFlagAsk, setIsFlagAsk] = useState(false);
  const [capitalCurrent, setCapitalCurrent] = useState("Buenos aires");

  return (
    <div className="containerCard">
      <Title style={{ color: "#F2F2F2", fontWeight: "700" }}>COUTRY QUIZ</Title>
      <Card bordered={false} className="card">
        {isFlagAsk ? (
          <>
            <img src="" style={{ marginTop: "1rem" }} />
            <Title level={3} style={{ color: "#2F527B" }}>
              Which country does this flag belong to?
            </Title>
          </>
        ) : (
          <Title
            level={3}
            style={{ color: "#2F527B", margin: "1.2rem 0 2rem 0" }}
          >
            {capitalCurrent} is the capital of
          </Title>
        )}
        <Button block className="buttonOption">
          <span>A</span> Default
        </Button>
        <Button block className="buttonOption">
          <span>B</span> Default
        </Button>
        <Button block className="buttonOption">
          <span>C</span> Default
        </Button>
        <Button block className="buttonOption" style={{ marginBottom: "2rem" }}>
          <span>D</span>Default
        </Button>
        <div className="containerButtomNext">
          <Button className="buttonNext">Next</Button>
        </div>
      </Card>
    </div>
  );
};

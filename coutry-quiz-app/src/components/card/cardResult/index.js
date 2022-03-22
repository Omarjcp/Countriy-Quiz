import { Button, Card, Typography } from "antd";
import ImgCongratz from "./congratz.png";
import "./index.scss";

const { Title } = Typography;

export const CardResult = ({
  answersCorrects,
  setStart,
  setAnswersCorrects,
  setFailQuestion,
}) => {
  const onTryAgain = () => {
    setStart(false);
    setAnswersCorrects(0);
    setFailQuestion(false);
  };
  return (
    <div className="containerCardResult">
      <Card bordered={false} className="cardResult">
        <img src={ImgCongratz} style={{ width: "100%", paddingTop: "1rem" }} />
        <Title style={{ color: "#1D355D", fontWeight: "700" }}>Results</Title>
        <p>
          You got{" "}
          <Title
            style={{
              color: "rgb(71, 165, 71)",
              fontWeight: "600",
              display: "inline",
            }}
          >
            {answersCorrects}
          </Title>{" "}
          correct answers
        </p>
        <div className="containerButtomTryAgain">
          <Button className="buttonTryAgain" onClick={onTryAgain}>
            Try Again
          </Button>
        </div>
      </Card>
    </div>
  );
};

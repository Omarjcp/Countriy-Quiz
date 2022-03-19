import { GithubOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <div style={{ position: "absolute", bottom: 0 }}>
      <p>
        created by{" "}
        <a href="https://github.com/Omarjcp" target="_blank">
          Omar Castillo <GithubOutlined />
        </a>{" "}
        - devChallenges.io
      </p>
    </div>
  );
};

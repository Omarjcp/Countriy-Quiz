import { LoadingOutlined } from "@ant-design/icons";

export const LoadingComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingOutlined />
    </div>
  );
};

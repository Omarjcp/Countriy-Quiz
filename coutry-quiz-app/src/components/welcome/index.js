export const Welcome = ({ onClickStart }) => {
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
      <button
        style={{
          width: "5rem",
          height: "2.5rem",
          backgroundColor: "transparent",
          border: "2px solid #f9a826",
          borderRadius: "12px",
          color: "#fff",
          fontWeight: "600",
        }}
        onClick={onClickStart}
      >
        Start
      </button>
    </div>
  );
};

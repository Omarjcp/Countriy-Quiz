export const Welcome = ({ onClickStart }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "2",
      }}
    >
      <button
        style={{
          width: "15rem",
          height: "3rem",
          backgroundColor: "transparent",
          border: "2px solid #f9a826",
          borderRadius: "12px",
          color: "#fff",
          fontWeight: "700",
          fontSize: "1.5rem",
          letterSpacing: "2px",
        }}
        onClick={onClickStart}
      >
        Start Game
      </button>
    </div>
  );
};

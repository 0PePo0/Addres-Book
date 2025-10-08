import React from "react";

const CustomButton = ({ onClick, children, type = "button", style = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "10px 16px",
        backgroundColor: "#26282aff",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 4px #373a3cff",
        ...style,
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#373a3cff";
        e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "#4d4f52ff";
        e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      }}
      onMouseDown={(e) => {
        e.target.style.transform = "scale(0.98)";
      }}
      onMouseUp={(e) => {
        e.target.style.transform = "scale(1)";
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
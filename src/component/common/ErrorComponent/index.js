import React from "react";

export const ErrorComponent = ({ message }) => {
  return (
    <span className="text-danger" style={{ fontSize: "16px" }}>
      {message ? message : "Error in field"}
    </span>
  );
};

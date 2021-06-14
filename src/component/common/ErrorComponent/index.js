import React from "react";

export const ErrorComponent = ({ message }) => {
  return (
    <span className="text-danger">
      {message ? message : "Error in field"}
    </span>
  );
};

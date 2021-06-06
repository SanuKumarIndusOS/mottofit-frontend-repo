import React from "react";

export const FormErrorMessage = ({ error, type, messages }) => {
  if (!error) return null;

  return (
    <span className="text-danger" style={{ fontSize: "16px" }}>
      {messages[error.type] ? messages[error.type] : "Error in field"}
    </span>
  );
};

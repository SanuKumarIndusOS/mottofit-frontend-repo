import React, { useState } from "react";
import "./styles.scss";

export const UserAvatar = ({ userName = "", profilePicture = "" }) => {
  const [isError, setError] = useState(false);
  let firstLetter = userName[0];

  let tempLastName = userName.split(" ")[userName.split(" ").length - 1];

  let lastLetter =
    userName.split(" ").length > 1
      ? tempLastName[tempLastName.length - 1]
      : userName[userName.length - 1];

  let initialLetters = `${firstLetter || "A"}${
    lastLetter || "Z"
  }`.toUpperCase();

  const backgroundColor = ["green", "red", "brown", "orange", "blue"];

  let colorCode = Math.floor(
    (initialLetters.charCodeAt(0) +
      initialLetters.charCodeAt(initialLetters.length - 1)) /
      2
  );
  let colorByName = String.fromCharCode(colorCode);

  let backgroundColorByName = "";

  if (colorByName <= "E") {
    backgroundColorByName = backgroundColor[0];
  } else if (colorByName <= "J") {
    backgroundColorByName = backgroundColor[1];
  } else if (colorByName <= "O") {
    backgroundColorByName = backgroundColor[2];
  } else if (colorByName <= "T") {
    backgroundColorByName = backgroundColor[3];
  } else if (colorByName <= "Z") {
    backgroundColorByName = backgroundColor[4];
  }

  let StyleComponent = "";

  if (profilePicture) {
    StyleComponent = (
      <img
        src={profilePicture}
        alt="icon"
        onError={(e) => {
          !isError && setError(true);
        }}
      />
    );
  }

  if (isError || !profilePicture) {
    StyleComponent = (
      <div className={`user-avatar-pic background-${backgroundColorByName}`}>
        {initialLetters}
      </div>
    );
  }

  //   console.log(backgroundColorByName);

  return <>{StyleComponent}</>;
};

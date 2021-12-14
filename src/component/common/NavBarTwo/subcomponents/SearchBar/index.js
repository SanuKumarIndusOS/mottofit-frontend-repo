import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import "./styles.scss";
import { history } from "helpers";

function NavSearchBar() {
  const [keys, setKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/trainer/results",
      state: {
        key: keys,
      },
    });
  };

  const handleChange = (e) => setKey(e.target.value);

  useEffect(() => {
    setKey("");
  }, []);

  return (
    <div className="navsearch-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search by Trainer Name"
          onChange={handleChange}
        ></input>
        <BiSearch className="icon-search" />
      </form>
    </div>
  );
}

export default NavSearchBar;

import React from "react";
import { NormalMultiSelect } from "../NormalMultiSelect";
import { getFormattedYears } from "service/helperFunctions";

export const YearDropDown = ({ label = "", name = "", ...restProps }) => {
  const options = getFormattedYears().map((year) => ({
    label: year,
    value: year,
    name,
  }));
  return (
    <NormalMultiSelect
      placeholder={label}
      // value={userData.location}
      arrow={true}
      name={name}
      options={options}
      {...restProps}
      // handleChange={handleInput}
    />
  );
};

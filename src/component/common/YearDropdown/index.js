import React from "react";
import { NormalMultiSelect } from "../NormalMultiSelect";
import { getFormattedYears } from "service/helperFunctions";

export const YearDropDown = ({ label = "", name = "", ...restProps }) => {
  const options = getFormattedYears().map((year) => ({
    label: year.toString(),
    value: year.toString(),
    name,
  }));
  return (
    <NormalMultiSelect
      placeholder={label}
      arrow={true}
      name={name}
      options={options}
      {...restProps}
    />
  );
};

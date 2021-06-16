import React, { useEffect, useState, useRef } from "react";

import "./inPersonStyles.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
export const InPersonDropDown = ({ inPerson, handleChange, type }) => {
  const options = [
    { label: "New York", value: "newYork" },
    { label: "Miami", value: "miami" },
    { label: "Hamptons", value: "hamptons" },
    { label: "Plam Beach", value: "plamBeach" },
  ];

  return (
    <div className="inPersonBG">
      <div className="list_inPerson">
        <form>
          <FormControl component="fieldset">
            <RadioGroup>
              {options.map(({ label, value }, index) => (
                <FormControlLabel
                  key={`${label}_${index}`}
                  htmlFor={`${value}_${type}`}
                  control={
                    <Radio
                      checked={inPerson[value]?.selected}
                      onChange={() => handleChange(value)}
                      className="inperson_radio"
                      id={`${value}_${type}`}
                    />
                  }
                  label={label}
                  className="inperson_checkbox"
                />
              ))}
            </RadioGroup>
          </FormControl>
        </form>
      </div>
    </div>
  );
};
export default InPersonDropDown;

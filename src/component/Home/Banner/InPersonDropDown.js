import React, { useState } from "react";

import "./inPersonStyles.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
export const InPersonDropDown = ({ inPerson, handleChange }) => {
  // const [newYork, setNewYork] = useState(false);
  // const [miami, setMiami] = useState(false);
  // const [hamptons, setHamptons] = useState(false);
  // const [plamBeach, setPlamBeach] = useState(false);

  const options = [
    { label: "New York", value: "newYork" },
    { label: "Miami", value: "miami" },
    { label: "Hamptons", value: "hamptons" },
    { label: "Plam Beach", value: "plamBeach" },
  ];

  //   console.log(inPerson);

  return (
    <div className="inPersonBG">
      <div className="list_inPerson">
        <form>
          <FormControl component="fieldset">
            <RadioGroup>
              {options.map(({ label, value }, index) => (
                <FormControlLabel
                  key={`${label}_${index}`}
                  control={
                    <Radio
                      checked={inPerson[value]?.selected}
                      onChange={() => handleChange(value)}
                      className="inperson_radio"
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

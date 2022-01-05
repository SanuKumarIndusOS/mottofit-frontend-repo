import React, { useState } from "react";

import "./inPersonStyles.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
export const InPersonDropDown = () => {
  // const [newYork, setNewYork] = useState(false);
  // const [miami, setMiami] = useState(false);
  // const [hamptons, setHamptons] = useState(false);
  // const [plamBeach, setPlamBeach] = useState(false);
  const [inPerson, setInPerson] = useState({
    newYork: "",
    miami: "",
    hamptons: "",
    plamBeach: "",
  });
  return (
    <div className="inPersonBG">
      <div className="list_inPerson">
        <form>
          <FormControl component="fieldset">
            <RadioGroup>
              <FormControlLabel
                control={
                  <Radio
                    value={inPerson.newYork}
                    onChange={(e) => {
                      setInPerson({
                        ...inPerson,
                        newYork: !inPerson.newYork && e.target.value,
                      });
                     // console.log("clicked New york");
                    }}
                    className="inperson_radio"
                  />
                }
                label="New York City"
                className="inperson_checkbox"
              />
              <FormControlLabel
                control={
                  <Radio
                    value={inPerson.miami}
                    onChange={(e) => {
                      setInPerson({
                        ...inPerson,
                        miami: !inPerson.miami && e.target.value,
                      });
                     // console.log("clicked Miami");
                    }}
                    className="inperson_radio"
                  />
                }
                label="Miami"
                className="inperson_checkbox"
              />
              <FormControlLabel
                control={
                  <Radio
                    value={inPerson.hamptons}
                    onChange={(e) => {
                      setInPerson({
                        ...inPerson,
                        hamptons: !inPerson.hamptons && e.target.value,
                      });
                     // console.log("clicked Hamptons");
                    }}
                    className="inperson_radio"
                  />
                }
                label="Hamptons"
                className="inperson_checkbox"
              />
              <FormControlLabel
                control={
                  <Radio
                    value={inPerson.plamBeach}
                    onChange={(e) => {
                      setInPerson({
                        ...inPerson,
                        plamBeach: !inPerson.plamBeach && e.target.value,
                      });
                    //  console.log("clicked Plam Beach");
                    }}
                    className="inperson_checkbox"
                  />
                }
                label="Palm Beach"
                className="inperson_checkbox"
              />
            </RadioGroup>
          </FormControl>
        </form>
      </div>
    </div>
  );
};
export default InPersonDropDown;

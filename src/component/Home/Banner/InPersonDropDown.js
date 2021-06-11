import React, { useEffect, useState, useRef } from "react";

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
    const [open, setOpen] = useState(false);
    const node = useRef();
    const handleClickOutside = (e) => {
        console.log("clicking anywhere");
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setOpen(false);
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);
    return (
        <div className="inPersonBG" ref={node}>
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
                                                newYork:
                                                    !inPerson.newYork &&
                                                    e.target.value,
                                            });
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
                                                miami:
                                                    !inPerson.miami &&
                                                    e.target.value,
                                            });
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
                                                hamptons:
                                                    !inPerson.hamptons &&
                                                    e.target.value,
                                            });
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
                                                plamBeach:
                                                    !inPerson.plamBeach &&
                                                    e.target.value,
                                            });
                                        }}
                                        className="inperson_checkbox"
                                    />
                                }
                                label="Plam Beach"
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

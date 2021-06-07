import React, { Component } from "react";
import Select, { components } from "react-select";
import "./select.scss";
import logo from "../../../assets/files/SVG/Drop Down 4.svg";
export class NormalMultiSelect extends Component {
    //change select
    handleChange = (newValue) => {
        let { isMulti } = this.props;
        if (!!isMulti) {
            let body = {
                target: {
                    name: this.props.name,
                    value: [],
                },
            };
            if (!!newValue && newValue.length) {
                newValue.forEach((array) => {
                    let obj = {
                        value: array.value,
                        label: array.label,
                    };
                    body.target.value.push(obj);
                });
            }
            this.props.handleChange(body);
        } else {
            let body = {
                target: {
                    name: this.props.name,
                    value: newValue ? newValue.value : "",
                    label: newValue ? newValue.label : "",
                },
            };

            this.props.handleChange(body);
        }
    };

    //handle Input Change
    handleInputChange = (newValue) => {
        let body = {
            target: {
                name: this.props.name,
                value: newValue ? newValue : "",
            },
        };
        this.props.handleinputChange && this.props.handleinputChange(body);
    };

    render() {
        let {
            className = "select-form-control w-100",
            options = [],
            value = "",
            name = "",
            placeholder = "Select",
            disabled = false,
            arrow = false,
            isReadOnly = false,
            label = "",
            isMulti = false,
            isClearable = false,
            isSearchable = false,
            isBoldLabel = false,
            showArrow = true,
        } = this.props;

        const DropdownIndicator = (props) => {
            return (
                components.DropdownIndicator && (
                    <components.DropdownIndicator {...props}>
                        <img src={logo} alt="dropdown" />
                    </components.DropdownIndicator>
                )
            );
        };
        const customStyles = {
            placeholder: (base) => ({
                ...base,
                fontSize: 18,
                color: "#000",
                fontWeight: 500,
                lineHeight: 38,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontFamily: "Montserrat",
            }),
            indicatorSeparator: (base) => ({
                ...base,
                display: "none",
            }),
            valueContainer: (base) => ({
                ...base,
                padding: "0px 20px",
                fontSize: 18,
                color: "#000",
                fontWeight: 500,
                lineHeight: 38,
                height: "100%",
                fontFamily: "Montserrat",
            }),
            singleValue: (base) => ({
                ...base,
                color: "#000",
                fontWeight: 500,
            }),
            dropdownIndicator: (base) => ({
                ...base,
                padding: 0,
                height: "26px",
                width: "26px",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontFamily: "Montserrat",
            }),
            option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#53BFD2" : "#fff",
                color: isFocused ? "#fff" : "#000",
                fontSize: 18,
                textAlign: "left",
                fontFamily: "Montserrat",
            }),
            control: (base) => ({
                ...base,
                borderRadius: 50,
                border: "2px solid #bcbcbc",
                boxShadow: "0 0 !important",
                outline: "0 ",
                background: "white",
                height: 45,
                minHeight: 45,
                fontFamily: "Montserrat",
            }),
        };
        return (
            <>
                {!isReadOnly ? (
                    <div
                        className={`${
                            arrow ? "select-section w-100" : "Select"
                        } ${isBoldLabel ? "mt-0" : ""}`}
                    >
                        {label !== "" ? (
                            <div>
                                <label
                                    className={
                                        isBoldLabel
                                            ? "mb-1 text-black-22"
                                            : "font-weight-normal mb-1"
                                    }
                                >
                                    {label}
                                </label>
                            </div>
                        ) : null}
                        <Select
                            className={className}
                            classNamePrefix="Select"
                            isDisabled={disabled}
                            isClearable={isClearable}
                            isSearchable={isSearchable}
                            name={name}
                            options={options}
                            onChange={this.handleChange}
                            isMulti={isMulti}
                            showArrow={showArrow}
                            placeholder={placeholder}
                            styles={customStyles}
                            value={
                                !!options && options.length > 0
                                    ? options.find(
                                          (data) => data.value === value
                                      )
                                        ? options.find(
                                              (data) => data.value === value
                                          )
                                        : null
                                    : null
                            }
                            components={{ DropdownIndicator }}
                        />
                    </div>
                ) : (
                    <p>{value}</p>
                )}
            </>
        );
    }
}

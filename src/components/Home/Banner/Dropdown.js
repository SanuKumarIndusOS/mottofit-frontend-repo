import React, { useState } from "react";

const Dropdown = ({ title, items = [], multiSelect = false }) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);

    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if(!selection.some(current => current.id === item.id)){
            setSelection([item])
        }
    };
    return (
        <div className="dd-wrapper">
            <div
                tabIndex={0}
                className="dd-header d-flex"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header_title">
                    <p className="select">{title}</p>
                </div>
                <div className="dd-header__action">
                    <p>{open ? "C" : "O"}</p>
                </div>
            </div>
            {open && (
                <div className="dd-list">
                    {items.map(item => {
                        <div className="primary" key={item.id}>
                            <button
                                type="button"
                                onClick={() => handleOnClick(item)}
                            >
                                <span>{item.data}</span>
                                <span>bhxd</span>
                            </button>
                        </div>;
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

import React from "react";
import "./styles.scss";

function ArrowHoverBlacked() {
    return (
        <div className="check">
            {/* <div className="button_text">Submit</div> */}
            <div className="arrow_container">
                <div className="arrow_anim" id="arrow_anim">
                    <div className="line_btn"></div>
                    <div className="arrow right"></div>
                </div>
                <div className="arrow2 right" id="cube"></div>
                <div className="circle_black"></div>
            </div>
        </div>
    );
}

export default ArrowHoverBlacked;

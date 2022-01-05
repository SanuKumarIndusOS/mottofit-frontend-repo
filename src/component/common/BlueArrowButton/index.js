import React from "react";
import "./styles.scss";
const BlueHoverButton = () => {
    return (
        <div className="check_blue">
            {/* <div className="button_text">Submit</div> */}
            <div className="arrow_container_blue">
                <div className="arrow_anim_blue" id="arrow_anim">
                    <div className="line_blue"></div>
                    <div className="arrow_blue right_blue"></div>
                </div>
                <div className="arrow2_blue right_blue" id="cube"></div>
                <div className="circle_blue"></div>
            </div>
        </div>
    );
};

export default BlueHoverButton;

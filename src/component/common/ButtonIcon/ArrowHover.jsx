import React from "react";
import "./styles.scss";

function ArrowHover() {
    return (
        <>
            <div>
                <span className='arrow-hover'>
                    <svg
                        className="arrow-icon"
                        focusable="false"
                        imageRendering="auto"
                        baseProfile="basic"
                        version="1.1"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 62 35"
                    >
                        <title>Arrow Icon</title>
                        <rect x="0" y="14.7" width="55.2" height="4.55"></rect>
                        <g transform="translate(40.9 0)">
                            <path
                                stroke="none"
                                d="M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"
                            ></path>
                        </g>
                    </svg>
                </span>
            </div>
        </>
    );
}

export default ArrowHover;

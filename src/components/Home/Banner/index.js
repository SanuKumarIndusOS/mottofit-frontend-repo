import React, { useState } from "react";
import "./style.scss";
import "./find.sass";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";

// import SearchButton from "../../../assests/Home/Banner/Search Button.png";
const Banner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const onClickHandle = () => {
        setSelectedDate(selectedDate);
        console.log(selectedDate);
    };
    return (
        <div className="background">
            <div className="cntr_cotainer">
                <div className="heading_items">
                    <h2 className="heading_txt">Train with the Best</h2>
                    <p className="sub_heading_txt">
                        Discover & book trusted personal trainers for
                        <br />
                        Strength & HIIT, Boxing, Yoga & Pilates
                    </p>
                </div>
                <div className="card-box ">
                    <div className="card-wrapper">
                        <div className="item1">
                            <h3>Location</h3>
                            <div className="card-item">
                                <input
                                    type="text"
                                    placeholder="Virtual"
                                ></input>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9"
                                    height="27"
                                    viewBox="0 0 9 27"
                                >
                                    <text
                                        id="_"
                                        data-name="/"
                                        transform="translate(1 22)"
                                        fill="#53bfd2"
                                        fontSize="20"
                                        fontFamily="SegoeUI, Segoe UI"
                                    >
                                        <tspan x="0" y="0">
                                            /
                                        </tspan>
                                    </text>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="In Person"
                                ></input>
                            </div>
                        </div>
                        <LineBetween />
                        <div className="item2">
                            <h3>Training Vertical</h3>
                            <div className="card-item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27.381"
                                    height="24.188"
                                    viewBox="0 0 27.381 24.188"
                                >
                                    <g
                                        id="Strength_Icon"
                                        data-name="Strength Icon"
                                        transform="translate(0.133 0.125)"
                                    >
                                        <path
                                            id="Path_14073"
                                            data-name="Path 14073"
                                            d="M21.7,25.439l-2.55-1.177c-1.55-.716-3.509.042-4.925,1.722L12,24.768c-.494-.23-1.189.191-1.519.9a1.84,1.84,0,0,0-.166,1.063.863.863,0,0,0,.437.668l2.06,1.129c-.853,2.572-.213,5.145,1.6,5.982l2.549,1.177a3.019,3.019,0,0,0,1.274.276,4.076,4.076,0,0,0,2.069-.621,6.978,6.978,0,0,0,2.673-3.1C24.289,29.424,23.714,26.367,21.7,25.439ZM11.173,26.67a.317.317,0,0,1-.022-.077,1.02,1.02,0,0,1,.1-.564.9.9,0,0,1,.427-.474l2.035,1.113a7.88,7.88,0,0,0-.578,1.035c0,.011-.008.021-.014.032ZM13.9,28.06c1.11-2.4,3.3-3.76,4.894-3.028l.625.289a4.608,4.608,0,0,0-1.064.463,7.423,7.423,0,0,0-3.3,7.142,4.628,4.628,0,0,0,.339,1.11l-.621-.288C13.185,33.013,12.795,30.461,13.9,28.06ZM22.216,31.9a6.136,6.136,0,0,1-2.336,2.725,2.728,2.728,0,0,1-2.557.3,2.73,2.73,0,0,1-1.427-2.145,6.58,6.58,0,0,1,2.9-6.271,3.246,3.246,0,0,1,1.637-.5,2.183,2.183,0,0,1,.918.2C22.935,26.941,23.325,29.493,22.216,31.9Z"
                                            transform="translate(-4.493 -12.027)"
                                            fill="#53bfd2"
                                            stroke="#53bfd2"
                                            strokeWidth="0.25"
                                        />
                                        <path
                                            id="Path_14074"
                                            data-name="Path 14074"
                                            d="M7.037,27.132a2.54,2.54,0,0,1-2.139.086,3.063,3.063,0,0,1-1.5-2.9.423.423,0,0,0-.423-.418H2.973a.423.423,0,0,0-.418.429,5.005,5.005,0,0,0,.424,2.006l-.632-.291A2.732,2.732,0,0,1,.92,23.9a6.137,6.137,0,0,1,.559-3.546,6.133,6.133,0,0,1,2.336-2.725,2.734,2.734,0,0,1,2.557-.3l.026.011.613.282A6.39,6.39,0,0,0,3.26,21.172a7.779,7.779,0,0,0-.554,1.66.423.423,0,0,0,.326.5.433.433,0,0,0,.089.009.423.423,0,0,0,.413-.336,6.968,6.968,0,0,1,.494-1.48c1.11-2.4,3.3-3.763,4.894-3.027a2.774,2.774,0,0,1,1.447,2.265.423.423,0,1,0,.838-.121,3.631,3.631,0,0,0-1.93-2.913L6.728,16.554,6.7,16.542a3.555,3.555,0,0,0-3.316.356A6.979,6.979,0,0,0,.711,20c-1.305,2.83-.731,5.886,1.282,6.816l2.55,1.177a3.01,3.01,0,0,0,1.269.272,3.864,3.864,0,0,0,1.571-.354.424.424,0,0,0-.346-.773Z"
                                            transform="translate(-0.011 -8.67)"
                                            fill="#53bfd2"
                                            stroke="#53bfd2"
                                            strokeWidth="0.25"
                                        />
                                        <path
                                            id="Path_14075"
                                            data-name="Path 14075"
                                            d="M33.011,26.464a.423.423,0,1,0,.01.847h.013a3.078,3.078,0,1,0-2.9-4.3.423.423,0,0,0,.776.339,2.231,2.231,0,1,1,2.1,3.12Z"
                                            transform="translate(-13.119 -10.791)"
                                            fill="#53bfd2"
                                            stroke="#53bfd2"
                                            strokeWidth="0.25"
                                        />
                                        <path
                                            id="Path_14076"
                                            data-name="Path 14076"
                                            d="M36.135,4.889a4.527,4.527,0,0,0-3.831-2.1H26.956a4.546,4.546,0,0,0-4.125,6.457l1.427,3.081a6.674,6.674,0,0,0-.8,1.439.423.423,0,1,0,.786.315,5.831,5.831,0,0,1,.811-1.41l.013-.017a5.732,5.732,0,0,1,1.327-1.23h0s.005,0,.008-.006a5.777,5.777,0,1,1,6.119,9.8h-2.9a.423.423,0,0,0,0,.847h3.007a.422.422,0,0,0,.207-.056,6.6,6.6,0,0,0,2.136-9.628l1.45-3.131a4.528,4.528,0,0,0-.294-4.358Zm-.474,4L34.38,11.657a6.659,6.659,0,0,0-.826-.726L34.7,8.448a2.643,2.643,0,0,0-2.4-3.755h-.53a.423.423,0,1,0,0,.847H32.3a1.8,1.8,0,0,1,1.632,2.553L32.838,10.46a6.615,6.615,0,0,0-6.427-.029L25.328,8.093a1.8,1.8,0,0,1,1.631-2.553h4.766a.423.423,0,0,0,0-.847H26.956a2.645,2.645,0,0,0-2.4,3.756l1.132,2.443a6.57,6.57,0,0,0-.829.721L23.6,8.891a3.7,3.7,0,0,1,3.356-5.255H32.3a3.7,3.7,0,0,1,3.357,5.254Z"
                                            transform="translate(-9.769 -2.791)"
                                            fill="#53bfd2"
                                            stroke="#53bfd2"
                                            strokeWidth="0.25"
                                        />
                                    </g>
                                </svg>
                                <select>
                                    <option value="Boxing">Boxing</option>
                                    <option value="Pilates">Pilates</option>
                                    <option value="Strength">Strength & hiit</option>
                                    <option value="Yoga">Yoga</option>
                                </select>
                            </div>
                        </div>
                        <LineBetween />
                        <div className="item3">
                            <h3>Schedule</h3>
                            <div className="card-item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19.538"
                                    height="18.547"
                                    viewBox="0 0 19.538 18.547"
                                >
                                    <g
                                        id="Shedule_Icon"
                                        data-name="Shedule Icon"
                                        transform="translate(-1023.25 -220.454)"
                                    >
                                        <path
                                            id="Path_3324"
                                            data-name="Path 3324"
                                            d="M6.5,6h14.03a1.873,1.873,0,0,1,2,1.7V19.637a1.873,1.873,0,0,1-2,1.7H6.5a1.873,1.873,0,0,1-2-1.7V7.7A1.873,1.873,0,0,1,6.5,6Z"
                                            transform="translate(1019.5 216.909)"
                                            fill="none"
                                            stroke="#53bfd2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            id="Path_3325"
                                            data-name="Path 3325"
                                            d="M24,3V6.409"
                                            transform="translate(1013.027 218.204)"
                                            fill="none"
                                            stroke="#53bfd2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            id="Path_3326"
                                            data-name="Path 3326"
                                            d="M12,3V6.409"
                                            transform="translate(1017.011 218.204)"
                                            fill="none"
                                            stroke="#53bfd2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            id="Path_3327"
                                            data-name="Path 3327"
                                            d="M4.5,15H22.538"
                                            transform="translate(1019.5 213.023)"
                                            fill="none"
                                            stroke="#53bfd2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </g>
                                </svg>
                                <DatePicker
                                    onChange={(date) => setSelectedDate(date)}
                                    selected={selectedDate}
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                ></DatePicker>

                                <DropDownSVG onClick={onClickHandle} />
                            </div>
                        </div>
                        <LineBetween />
                        <div className="item4">
                            <h3>Availability</h3>
                            <div className="card-item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22.911"
                                    height="21.161"
                                    viewBox="0 0 22.911 21.161"
                                >
                                    <path
                                        id="Availability_Icon"
                                        data-name="Availability Icon"
                                        d="M3.708,13.07a.833.833,0,0,0,.266.637.949.949,0,0,0,.685.247H6.266a.919.919,0,0,0,.656-.257A.836.836,0,0,0,7.2,13.07a.888.888,0,0,0-.266-.675.928.928,0,0,0-.656-.266H4.659a.924.924,0,0,0-.685.266A.861.861,0,0,0,3.708,13.07Zm1.683,5.877a3.271,3.271,0,0,0,1.008,2.4,3.25,3.25,0,0,0,2.387,1.008h6.523a3.205,3.205,0,0,0,2.368-1,3.3,3.3,0,0,0,.989-2.406,3.069,3.069,0,0,0-.2-1.17,5.455,5.455,0,0,0,1.873-2.016,5.6,5.6,0,0,0,.238-4.916,5.642,5.642,0,0,0-3.033-3.033,5.49,5.49,0,0,0-2.206-.456,5.58,5.58,0,0,0-2.872.77A5.7,5.7,0,0,0,10.393,10.2a5.622,5.622,0,0,0-.751,2.862v.323a3.9,3.9,0,0,0-1.883,2.368,3.307,3.307,0,0,0-1.721,1.208A3.272,3.272,0,0,0,5.391,18.947ZM6.875,5.481a.845.845,0,0,0,.247.637L8.653,7.726a1,1,0,0,0,1.341,0,.9.9,0,0,0,.266-.666.926.926,0,0,0-.266-.666L8.425,4.825a.986.986,0,0,0-.666-.276.826.826,0,0,0-.647.266A.953.953,0,0,0,6.875,5.481Zm.4,13.465a1.478,1.478,0,0,1,.38-1.027,1.449,1.449,0,0,1,.97-.485l.59-.076c.124,0,.19-.076.19-.219l.086-.533a2.124,2.124,0,0,1,.694-1.369,1.991,1.991,0,0,1,1.407-.552,2.043,2.043,0,0,1,1.436.552,2.148,2.148,0,0,1,.713,1.369l.076.618c.057.143.133.219.228.219H15.3a1.482,1.482,0,0,1,1.065.447,1.416,1.416,0,0,1,.447,1.065,1.515,1.515,0,0,1-.447,1.094,1.439,1.439,0,0,1-1.065.456H8.786a1.416,1.416,0,0,1-1.075-.456A1.529,1.529,0,0,1,7.274,18.947Zm4.2-6.076a3.857,3.857,0,0,1,1.208-2.625,3.714,3.714,0,0,1,2.653-1.065,3.663,3.663,0,0,1,2.7,1.132,3.774,3.774,0,0,1,1.113,2.748,3.7,3.7,0,0,1-.485,1.854,3.88,3.88,0,0,1-1.312,1.379,2.937,2.937,0,0,0-1.93-.694,3.864,3.864,0,0,0-1.464-1.987A3.972,3.972,0,0,0,11.6,12.87h-.124ZM14.415,4.55a.919.919,0,0,0,.276.666.937.937,0,0,0,1.6-.666V2.324a.836.836,0,0,0-.276-.628.979.979,0,0,0-1.322,0,.836.836,0,0,0-.276.628Zm6.01,14.483a.958.958,0,0,0,.257.666l1.56,1.541a.9.9,0,0,0,1.341,0,.832.832,0,0,0,.247-.647.891.891,0,0,0-.247-.637l-1.607-1.588a.906.906,0,0,0-.647-.238.867.867,0,0,0-.647.257A.882.882,0,0,0,20.425,19.032Zm0-11.991a.988.988,0,0,0,.257.685.943.943,0,0,0,1.293,0l1.607-1.607a.825.825,0,0,0,.247-.637.868.868,0,0,0-.276-.656.934.934,0,0,0-.666-.266.893.893,0,0,0-.647.276l-1.56,1.55A.889.889,0,0,0,20.425,7.041Zm2.453,6.029a.833.833,0,0,0,.266.637.949.949,0,0,0,.685.247h1.607a.919.919,0,0,0,.656-.257.836.836,0,0,0,.276-.628.888.888,0,0,0-.266-.675.928.928,0,0,0-.656-.266H23.839a.924.924,0,0,0-.685.266A.867.867,0,0,0,22.879,13.07Z"
                                        transform="translate(-3.583 -1.315)"
                                        fill="#53bfd2"
                                        stroke="#f8f8f8"
                                        strokeWidth="0.25"
                                    />
                                </svg>
                                <select>
                                    <option value="">Boxing</option>
                                    <option value="">Pilates</option>
                                    <option value="">Strength & hiit</option>
                                    <option value="">Yoga</option>
                                </select>
                            </div>
                        </div>
                        <LineBetween />
                        <div className="item5">
                            <div className="circle">
                                <BiSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function LineBetween() {
    return (
        <div className="line">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="55"
                viewBox="0 0 2 55"
            >
                <line
                    id="Line_1"
                    data-name="Line 1"
                    y2="55"
                    transform="translate(1)"
                    fill="none"
                    stroke="#eaeaea"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
function DropDownSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.118"
            height="7.809"
            viewBox="0 0 14.118 7.809"
        >
            <path
                id="Drop_Down_3"
                data-name="Drop Down 3"
                d="M12,0,6,6,0,0"
                transform="translate(1.061 1.061)"
                fill="none"
                stroke="#898989"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
        </svg>
    );
}

export default Banner;

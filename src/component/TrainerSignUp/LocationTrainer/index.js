import React from "react";
import "./styles.sass";
import Slider from "react-slick";
import { SlideData } from "./SlideData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="right-arrow"
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <svg
                id="Tertiary_Button"
                data-name="Tertiary Button"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
            >
                <path
                    id="Path_7512"
                    data-name="Path 7512"
                    d="M0,0V17.692"
                    transform="translate(13 22.534) rotate(-90)"
                    fill="none"
                    stroke="#53bfd2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
                <path
                    id="Path_7513"
                    data-name="Path 7513"
                    d="M13.068,0,6.534,6.534,0,0"
                    transform="translate(25.185 29.068) rotate(-90)"
                    fill="none"
                    stroke="#53bfd2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
                <g id="Path_14198" data-name="Path 14198" fill="none">
                    <path
                        d="M22.5,0A22.5,22.5,0,1,1,0,22.5,22.5,22.5,0,0,1,22.5,0Z"
                        stroke="none"
                    />
                    <path
                        d="M 22.5 2 C 19.73163986206055 2 17.04714012145996 2.541740417480469 14.52108955383301 3.61016845703125 C 12.0802001953125 4.642578125 9.887641906738281 6.120979309082031 8.004310607910156 8.004310607910156 C 6.120979309082031 9.887641906738281 4.642578125 12.0802001953125 3.61016845703125 14.52108955383301 C 2.541740417480469 17.04714012145996 2 19.73163986206055 2 22.5 C 2 25.26836013793945 2.541740417480469 27.95285987854004 3.61016845703125 30.47891044616699 C 4.642578125 32.9197998046875 6.120979309082031 35.11235809326172 8.004310607910156 36.99568939208984 C 9.887641906738281 38.87902069091797 12.0802001953125 40.357421875 14.52108955383301 41.38983154296875 C 17.04714012145996 42.45825958251953 19.73163986206055 43 22.5 43 C 25.26836013793945 43 27.95285987854004 42.45825958251953 30.47891044616699 41.38983154296875 C 32.9197998046875 40.357421875 35.11235809326172 38.87902069091797 36.99568939208984 36.99568939208984 C 38.87902069091797 35.11235809326172 40.357421875 32.9197998046875 41.38983154296875 30.47891044616699 C 42.45825958251953 27.95285987854004 43 25.26836013793945 43 22.5 C 43 19.73163986206055 42.45825958251953 17.04714012145996 41.38983154296875 14.52108955383301 C 40.357421875 12.0802001953125 38.87902069091797 9.887641906738281 36.99568939208984 8.004310607910156 C 35.11235809326172 6.120979309082031 32.9197998046875 4.642578125 30.47891044616699 3.61016845703125 C 27.95285987854004 2.541740417480469 25.26836013793945 2 22.5 2 M 22.5 0 C 34.92641067504883 0 45 10.07358932495117 45 22.5 C 45 34.92641067504883 34.92641067504883 45 22.5 45 C 10.07358932495117 45 0 34.92641067504883 0 22.5 C 0 10.07358932495117 10.07358932495117 0 22.5 0 Z"
                        stroke="none"
                        fill="#bcbcbc"
                    />
                </g>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="left-arrow"
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
            >
                <g
                    id="Tertiary_Button"
                    data-name="Tertiary Button"
                    transform="translate(45 45) rotate(180)"
                >
                    <path
                        id="Path_7512"
                        data-name="Path 7512"
                        d="M0,0V17.692"
                        transform="translate(13 22.534) rotate(-90)"
                        fill="none"
                        stroke="#53bfd2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                    />
                    <path
                        id="Path_7513"
                        data-name="Path 7513"
                        d="M13.068,0,6.534,6.534,0,0"
                        transform="translate(25.185 29.068) rotate(-90)"
                        fill="none"
                        stroke="#53bfd2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                    />
                    <g id="Path_14198" data-name="Path 14198" fill="none">
                        <path
                            d="M22.5,0A22.5,22.5,0,1,1,0,22.5,22.5,22.5,0,0,1,22.5,0Z"
                            stroke="none"
                        />
                        <path
                            d="M 22.5 2 C 19.73163986206055 2 17.04714012145996 2.541740417480469 14.52108955383301 3.61016845703125 C 12.0802001953125 4.642578125 9.887641906738281 6.120979309082031 8.004310607910156 8.004310607910156 C 6.120979309082031 9.887641906738281 4.642578125 12.0802001953125 3.61016845703125 14.52108955383301 C 2.541740417480469 17.04714012145996 2 19.73163986206055 2 22.5 C 2 25.26836013793945 2.541740417480469 27.95285987854004 3.61016845703125 30.47891044616699 C 4.642578125 32.9197998046875 6.120979309082031 35.11235809326172 8.004310607910156 36.99568939208984 C 9.887641906738281 38.87902069091797 12.0802001953125 40.357421875 14.52108955383301 41.38983154296875 C 17.04714012145996 42.45825958251953 19.73163986206055 43 22.5 43 C 25.26836013793945 43 27.95285987854004 42.45825958251953 30.47891044616699 41.38983154296875 C 32.9197998046875 40.357421875 35.11235809326172 38.87902069091797 36.99568939208984 36.99568939208984 C 38.87902069091797 35.11235809326172 40.357421875 32.9197998046875 41.38983154296875 30.47891044616699 C 42.45825958251953 27.95285987854004 43 25.26836013793945 43 22.5 C 43 19.73163986206055 42.45825958251953 17.04714012145996 41.38983154296875 14.52108955383301 C 40.357421875 12.0802001953125 38.87902069091797 9.887641906738281 36.99568939208984 8.004310607910156 C 35.11235809326172 6.120979309082031 32.9197998046875 4.642578125 30.47891044616699 3.61016845703125 C 27.95285987854004 2.541740417480469 25.26836013793945 2 22.5 2 M 22.5 0 C 34.92641067504883 0 45 10.07358932495117 45 22.5 C 45 34.92641067504883 34.92641067504883 45 22.5 45 C 10.07358932495117 45 0 34.92641067504883 0 22.5 C 0 10.07358932495117 10.07358932495117 0 22.5 0 Z"
                            stroke="none"
                            fill="#bcbcbc"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

const LocationTrainer = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slide-container">
            <div className="header-content">
                <h1>We are in these Cities</h1>
                <p>
                    Currently available for in-person live training in Miami,
                    New York City & the Hamptons. We will be launching in other
                    cities across the United States soon.
                </p>
            </div>

            <Slider {...settings}>
                {SlideData.map((slide, index) => {
                    return (
                        <div className="main-slide" key={index}>
                            <div className="slide-content">
                                <img
                                    src={slide.image}
                                    alt={slide.name}
                                    className="slide-image"
                                />
                                <img
                                    src={slide.line}
                                    alt={slide.name}
                                    className="slide-line"
                                />
                                <p>{slide.name}</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default LocationTrainer;

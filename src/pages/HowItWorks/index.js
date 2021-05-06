import React from "react";
import Banner from "component/HowItWork/Banner/index";
import Book from "component/HowItWork/Book/index";
import Customize from "component/HowItWork/Customize/index";
import TrainerMotto from "component/HowItWork/TrainerMotto/index";
import Footer from "component/common/Footer";

export default function index() {
    return (
        <div>
            {/* Banner section*/}
            <Banner />

            {/* Book with Motto section*/}
            <Book />

            {/* Customize your workout section*/}
            <Customize />

            {/* What makes training with Motto different section*/}
            <TrainerMotto />
        </div>
    );
}

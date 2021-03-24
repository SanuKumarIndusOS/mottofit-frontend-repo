import React, { useEffect, useState } from "react";
import Banner from "../../component/Home/Banner/index";
import Benfit from "../../component/Home/Benfit/index";
import Experience from "../../component/Home/Experience/index";
import Location from "../../component/Home/Location/index";
import Trainer from "../../component/Home/trainer/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../../component/common/Footer";
import SideBar from "../../component/common/SideBar";
// import {NavBar }from "../../component/common/Navbar/NavBar";
import SignUp from "../../component/SignUp/Banner/index";
import NavBarHome from "../../component/Home/NavbarHomePage/NavBarHome";
import { NavBar } from "../../component/common/Navbar/NavBar";
import SignIn from "../../component/SignIn/Banner/index";
import BannerTrainer from "../../component/TrainerSignUp/Banner";
import ExperienceTrainer from '../../component/TrainerSignUp/Experience/index'
import LocationTrainer from "../../component/TrainerSignUp/LocationTrainer";
const Home = () => {
    const [isOpen, setisOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const modalToggle = () => {
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Router>
                <Route exact path="/"> <NavBarHome toggle={toggle} modalToggle={modalToggle} /></Route>
                <SideBar isOpen={isOpen} toggle={toggle} />
                <Route exact path="/" component={Banner} />

                {/* User SignIn Screen */}
                <Route exact path="/"><SignIn /></Route>

                {/* Home Page */}
                <Route exact path="/" component={Benfit} />
                <Route exact path="/" component={Experience} />
                <Route exact path="/" component={Location} />
                <Route exact path="/" component={Trainer} />
                <Route exact path="/" component={Footer} />

                {/* User SignUp Screen */}
                <Route exact path="/signup"><NavBar toggle={toggle} /></Route>
                <Route path="/signup" component={SignUp} />
                <Route path="/signup" component={Footer} />

                {/* Trainer Sign Up */}
                <Route exact path="/trainersignup"><NavBar toggle={toggle} /></Route>
                <Route path="/trainersignup" component={BannerTrainer} />
                <Route path="/trainersignup" component={ExperienceTrainer} />
                <Route path="/trainersignup" component={LocationTrainer} />
                <Route path="/trainersignup" component={Footer} />
            </Router>

        </>
    );
};

export default Home;

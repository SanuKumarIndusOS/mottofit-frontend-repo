import React, { useEffect, useState } from "react";
import Banner from "../../components/Home/Banner/index";
import Benfit from "../../components/Home/Benfit/index";
import Experience from "../../components/Home/Experience/index";
import Location from "../../components/Home/Location/index";
import Trainer from "../../components/Home/trainer/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../../components/common/Footer";
import SideBar from "../../components/common/SideBar";
// import {NavBar }from "../../component/common/Navbar/NavBar";
import SignUp from "../../components/SignUp/Banner/index";
import NavBarHome from "../../components/Home/NavbarHomePage/NavBarHome";
import { NavBar } from "../../components/common/Navbar/NavBar";
import SignIn from "../../components/SignIn/Banner/index";
import BannerTrainer from "../../components/TrainerSignUp/Banner";
import ExperienceTrainer from "../../components/TrainerSignUp/Experience/index";
import LocationTrainer from "../../components/TrainerSignUp/LocationTrainer";
import FindTrainer from "../../components/FindYourTrainer/TrainerFilter/FindTrainer";
import TrainerCards from "../../components/FindYourTrainer/TrainersDetails/index";
import TrainerCardOutside from "../../components/FindYourTrainer/TrainerOutsideTime";
import AboutTrainer from "../../components/TrainerOnBoard/TrainerAboutYou";
import TrainerTracker from "../../components/TrainerOnBoard/CommonTrackerBar";
import TrainerBackground from "../../components/TrainerOnBoard/TrainerBackground";
import TrainerAvailability from "../../components/TrainerOnBoard/TrainerAvailability";
import TrainerCard from "../../components/TrainerOnBoard/TrainerCaptures/TrainerCard";
import TrainerSetUpProfile from "../../components/TrainerOnBoard/TrainerCaptures/TrainerSetUpProfile";
import HowItWork from "../../components/HowItWork/Banner/index";
import Book from "../../components/HowItWork/Book";
import CustomizeSection from "../../components/HowItWork/Customize/index";
import TrainerMotto from "../../components/HowItWork/TrainerMotto";
import TrainerProfile from "../../components/TrainerProfile/Profile/index";
import TrainerDashboard from "../../components/TrainerDashBoard/TrainerAdmin";
import UserTracker from "../../components/UserBookSession/UserTrackerBar";
import UserEventSchedular from "../../components/UserBookSession/UserSchedular";
import UserBookSession from "../../components/UserBookSession/UserSessionType";
import UserMottoPass from "../../components/UserBookSession/UserMottoPass";
import UserPayments from "../../components/UserBookSession/UserPayments";
const Home = () => {
    const [isOpen, setisOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [, setRedirect] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const modalToggle = () => {
        setModalIsOpen(!modalIsOpen);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setRedirect(true);
    }, []);
    return (
        <>
            <Router>
                <Route exact path="/">
                    {" "}
                    <NavBarHome toggle={toggle} modalToggle={modalToggle} />
                </Route>
                <SideBar isOpen={isOpen} toggle={toggle} />
                <Route exact path="/" component={Banner} />

                {/* User SignIn Screen */}
                <Route exact path="/">
                    <SignIn />
                </Route>

                {/* Home Page */}
                <Route exact path="/" component={Benfit} />
                <Route exact path="/" component={Experience} />
                <Route exact path="/" component={Location} />
                <Route exact path="/" component={Trainer} />
                <Route exact path="/" component={Footer} />

                {/* User SignUp Screen */}
                {/* {redirect? <Redirect to = '/'/>: null } */}
                <Route exact path="/signup">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/signup" component={SignUp} />
                <Route path="/signup" component={Footer} />

                {/* Trainer Sign Up */}
                <Route exact path="/trainersignup">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/trainersignup" component={BannerTrainer} />
                <Route path="/trainersignup" component={ExperienceTrainer} />
                <Route path="/trainersignup" component={LocationTrainer} />
                <Route path="/trainersignup" component={Footer} />

                {/* Find Your Trainer */}
                <Route exact path="/findtrainer">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/findtrainer" component={FindTrainer} />
                <Route path="/findtrainer" component={TrainerCards} />
                <Route path="/findtrainer" component={TrainerCardOutside} />
                <Route path="/findtrainer" component={Footer} />

                {/* Trainer OnBoard */}
                <Route exact path="/aboutTrainer">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/aboutTrainer" component={TrainerTracker} />
                <Route path="/aboutTrainer" component={AboutTrainer} />

                <Route exact path="/trainerbackground">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/trainerbackground" component={TrainerTracker} />
                <Route
                    path="/trainerbackground"
                    component={TrainerBackground}
                />
                <Route path="/trainerbackground" component={Footer} />

                <Route exact path="/trainer-avaliability">
                    <NavBar toggle={toggle} />
                </Route>
                <Route
                    path="/trainer-avaliability"
                    component={TrainerTracker}
                />
                <Route
                    path="/trainer-avaliability"
                    component={TrainerAvailability}
                />
                <Route path="/trainer-avaliability" component={Footer} />

                <Route exact path="/trainer-card">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/trainer-card" component={TrainerCard} />
                {/* <Route path="/trainer-card" component={Footer} /> */}

                <Route exact path="/trainer-setup">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/trainer-setup" component={TrainerSetUpProfile} />
                {/* <Route path="/trainer-setup" component={Footer} /> */}

                <Route exact path="/how-it-works">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/how-it-works" component={HowItWork} />
                <Route path="/how-it-works" component={Book} />
                <Route path="/how-it-works" component={CustomizeSection} />
                <Route path="/how-it-works" component={TrainerMotto} />
                <Route path="/how-it-works" component={Footer} />

                {/* tariner profile */}
                <Route exact path="/trainer-profile">
                    <NavBar toggle={toggle} />
                </Route>
                <Route path="/trainer-profile" component={TrainerProfile} />

                {/* Trainer dashboard */}
               
                <Route  path="/trainer-dashboard/" component={TrainerDashboard} />
                <Route  path="/trainer-dashboard/" component={Footer} />


                <Route  path="/user-onboard/schedule" component={UserTracker} />
                <Route  path="/user-onboard/schedule" component={UserEventSchedular} />


                <Route  path="/user-onboard/book-session" component={UserTracker} />
                <Route  path="/user-onboard/book-session" component={UserBookSession} />


                <Route  path="/user-onboard/motto-pass" component={UserTracker} />
                <Route  path="/user-onboard/motto-pass" component={UserMottoPass} />

                <Route  path="/user-onboard/user-payments" component={UserTracker} />
                <Route  path="/user-onboard/user-payments" component={UserPayments} />


              


            </Router>
        </>
    );
};

export default Home;

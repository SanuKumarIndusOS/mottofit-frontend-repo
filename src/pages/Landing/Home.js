import React, { useEffect } from "react";
import Banner from "../../component/Home/Banner/index";
import Benfit from "../../component/Home/Benfit/index";
import Experience from "../../component/Home/Experience/index";
import Location from "../../component/Home/Location/index";
import Trainer from "../../component/Home/trainer/index";
import Navbar from "../../component/common/Navbar/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../../component/common/Footer";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Router>
                <Route  path='/' component={Navbar} />
                <Route  path='/' component={Banner} />
                <Route  path='/' component={Benfit} />
                <Route  path='/' component={Experience} />
                <Route  path='/' component={Location} />
                <Route  path='/' component={Trainer} />
                <Route  path='/' component={Footer} />
            </Router>
        </>
    );
};

export default Home;

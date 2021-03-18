import React, { useEffect } from "react";
import Banner from "../../component/Home/Banner/index";
import Benfit from "../../component/Home/Benfit/index";
import Experience from "../../component/Home/Experience/index";
import Location from "../../component/Home/Location/index";
import Trainer from "../../component/Home/trainer/index";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <Benfit />
      <Experience />
      <Location />
      <Trainer />
    </div>
  );
};

export default Home;

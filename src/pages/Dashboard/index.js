import React from "react";
import Banner from "component/Home/Banner";
import Benfit from "component/Home/Benfit";
import Experience from "component/Home/Experience";
import Trainer from "component/Home/trainer";
import Location from "component/Home/Location";

export default function Main() {
  return (
    <div>
      {/* Banner  */}
      <Banner />

      {/* Benefit */}
      <Benfit />

      {/* Experience */}
      <Experience />

      {/* Loacation */}
      <Location />

      {/* Trainer */}
      <Trainer />
    </div>
  );
}

import React from "react";
import Banner from "component/Home/Banner";
import Benfit from "component/Home/Benfit";
import Experience from "component/Home/Experience";
import Trainer from "component/Home/trainer";
import Location from "component/Home/Location";

export default function Main() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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

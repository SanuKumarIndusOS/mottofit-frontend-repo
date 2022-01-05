import { useState, useEffect } from "react";
import moment from "moment";

function useWithinTwelveHours(startTime) {
  const [isWithinTwelveHours, setisWithinTwelveHours] = useState();
  let now = moment().valueOf();
  let end = moment().add(12, "hours").valueOf();

  useEffect(() => {
    if (startTime >= now && startTime <= end) {
      return setisWithinTwelveHours(true);
    } else {
      return setisWithinTwelveHours(false);
    }
  }, []);
  return isWithinTwelveHours;
}

export default useWithinTwelveHours;

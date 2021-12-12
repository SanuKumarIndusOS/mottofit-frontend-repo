import { LowPriority } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

// Note
// Use apiParams to pass all api parameter as array
// onChange of tab/component set activePage to zero and set renderData to empty array

const useLoadMore = (api, offset) => {
  const [renderData, setrenderData] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [maxCount, setmaxCount] = useState(1);
  const [apiParams, setapiParams] = useState([]);

  const maxPageCount = (totalItems) => {
      let temp = Math.ceil(totalItems / offset);
    console.log(temp);
    return temp;
  };

  useEffect(() => {
    console.log("activePafe",activePage, "max", maxCount);
    // Test for the condition

    if (activePage === 0) {
      console.log("lopp", apiParams);
      api(...apiParams,activePage).then(({ data: data, documentCount: totalItems }) => {
        setrenderData(data);
        let temp = maxPageCount(totalItems);
        setmaxCount(temp);
        // console.log(data);
      });
    } else{
      if (activePage < maxCount ) {
        console.log("lopp3", apiParams);
        api(...apiParams,activePage).then(({ data: data, documentCount: totalItems }) => {
          
          setrenderData([...renderData, ...data]);
          let temp = maxPageCount(totalItems);
          setmaxCount(temp);
         console.log(data);
        });
      }}
    
  }, [activePage, apiParams]);

  return [renderData, setrenderData, activePage, setActivePage, setapiParams];
};

export default useLoadMore;

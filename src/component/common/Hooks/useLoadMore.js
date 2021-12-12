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
    return temp;
  };

  useEffect(() => {
    // Test for the condition

    if (activePage === 0) {
      api(...apiParams, activePage).then(
        ({ data: data, documentCount: totalItems }) => {
          setrenderData(data);
          let temp = maxPageCount(totalItems);
          setmaxCount(temp);
        }
      );
    } else {
      if (activePage < maxCount) {
        api(...apiParams, activePage).then(
          ({ data: data, documentCount: totalItems }) => {
            setrenderData([...renderData, ...data]);
            let temp = maxPageCount(totalItems);
            setmaxCount(temp);
          }
        );
      }
    }
  }, [activePage, apiParams]);

  return [renderData, activePage, setActivePage, setapiParams];
};

export default useLoadMore;

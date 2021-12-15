import { LowPriority } from "@material-ui/icons";
import { set } from "date-fns";
import React, { useState, useEffect } from "react";

// Note
// Use apiParams to pass all api parameter as array
// onChange of tab/component set activePage to zero and set renderData to empty array

const useLoadMore = (api, needParams, offset) => {
  const [renderData, setrenderData] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [maxCount, setmaxCount] = useState(1);
  const [apiParams, setapiParams] = useState([]);
  const [dataLoader, setdataLoader] = useState(true);
  const [isbuttonVisible, setIsbuttonVisible] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);

  const maxPageCount = (totalItems) => {
    let temp = totalItems === 0 ? 1 : Math.ceil(totalItems / offset);
    return temp;
  };

  useEffect(() => {
    // Test for the condition

    if (apiParams.length !== 0) {
      if (activePage === 0) {
        console.log("hir");

        api(...apiParams, activePage).then(
          ({ data: data, documentCount: totalItems }) => {
            setrenderData(data);
            let temp = maxPageCount(totalItems);
            setmaxCount(temp);
            console.log(temp, data?.length);

            temp !== 1 ? setIsbuttonVisible(true) : setIsbuttonVisible(false);
            setTimeout(() => {
              setdataLoader(false);
            }, 500);

            if (data?.length === 0) return setisEmpty(true);
          }
        );
      } else {
        if (activePage < maxCount) {
          api(...apiParams, activePage).then(
            ({ data: data, documentCount: totalItems }) => {
              setrenderData([...renderData, ...data]);
              let temp = maxPageCount(totalItems);
              setmaxCount(temp);
              setTimeout(() => {
                setdataLoader(false);
              }, 500);
            }
          );
        } else {
          setIsbuttonVisible(false);
        }
      }
    }
  }, [activePage, apiParams]);

  return [
    renderData,
    activePage,
    setActivePage,
    setapiParams,
    dataLoader,
    setdataLoader,
    isbuttonVisible,
    isEmpty,
    setisEmpty,
  ];
};

export default useLoadMore;

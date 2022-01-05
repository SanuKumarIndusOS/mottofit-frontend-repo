import { useState, useEffect } from "react";

const useCalcCardPrice = (oneOnOnePrices, socialPrices, classPrices) => {
  const [cardPrice, setcardPrice] = useState();

  useEffect(() => {
    let oneOneTemp = [];
    let socialTemp = [];
    let classTemp = [];

    if (oneOnOnePrices !== null) {
      oneOneTemp = [...Object.values(oneOnOnePrices)];
    }

    if (socialPrices !== null) {
      socialTemp = [...Object.values(socialPrices)];
    }

    if (classPrices !== null) {
      classTemp = [...Object.values(classPrices)];
    }

    let temp = [...oneOneTemp, ...socialTemp, ...classTemp]
      ?.map(Number)
      .filter((i) => i !== 0);

    setcardPrice(Math.min(...temp));
  }, []);
  return cardPrice;
};

export default useCalcCardPrice;

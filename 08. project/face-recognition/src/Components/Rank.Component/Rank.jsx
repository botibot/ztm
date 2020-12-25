import React from "react";
import { toWordsOrdinal, toOrdinal } from "number-to-words";

const Rank = () => {
  return (
    <div>
      <div className="white f3">{"Jorge, your current rank is.."}</div>
      <div className="white f1">
        {toOrdinal(2) + "  "}
        {toWordsOrdinal(2).substring(0, 1).toUpperCase() +
          toWordsOrdinal(2).substring(1)}
      </div>
    </div>
  );
};

export default Rank;

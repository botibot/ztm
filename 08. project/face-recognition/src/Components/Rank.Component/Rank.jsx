import React from "react";
import { toWordsOrdinal, toOrdinal } from "number-to-words";

const Rank = ({ name, entries }) => {
  const rank = 1;

  return (
    <div>
      <div className="white f3">
        <h2>{name}</h2>
        <p className="ma0">your current entries are {entries}</p>
        <p className="ma0">and your current rank is:</p>
      </div>
      <div className="white f2 ma3 fw6">
        {toOrdinal(rank) + "  "}
        {toWordsOrdinal(rank).substring(0, 1).toUpperCase() +
          toWordsOrdinal(rank).substring(1)}
      </div>
    </div>
  );
};

export default Rank;

import React from "react";
import { toWordsOrdinal, toOrdinal } from "number-to-words";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        {name}, your current rank is... {entries}
      </div>
      <div className="white f1">
        {toOrdinal(entries) + "  "}
        {toWordsOrdinal(entries).substring(0, 1).toUpperCase() +
          toWordsOrdinal(entries).substring(1)}
      </div>
    </div>
  );
};

export default Rank;

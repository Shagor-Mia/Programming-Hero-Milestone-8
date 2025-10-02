import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousin = ({ name }) => {
  return (
    <div className="p-2 items-center rounded-xl border-2 border-red-400">
      <h1>{name}</h1>
      {name === "honey" && <Special />}
      {name === "samim" && <Friend />}
    </div>
  );
};

export default Cousin;

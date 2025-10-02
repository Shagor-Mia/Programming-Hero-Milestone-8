import React from "react";
import Special from "./Special";

const Me = ({ assets }) => {
  return (
    <div className="p-2 items-center rounded-xl border-2 border-amber-700">
      <h1>Me</h1>
      <Special assets={assets} />
    </div>
  );
};

export default Me;

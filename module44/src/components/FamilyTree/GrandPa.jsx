import React from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const GrandPa = ({ assets }) => {
  return (
    <div className="border-2 border-amber-200 py-10 px-10 rounded-2xl">
      <h1>GrandPa</h1>
      <section className="flex justify-center items-center py-5 border-2 border-amber-600 rounded-2xl gap-10">
        <Father assets={assets} />
        <Uncle />
        <Aunt />
      </section>
    </div>
  );
};

export default GrandPa;

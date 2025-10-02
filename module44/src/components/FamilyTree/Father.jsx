import React from "react";
import Me from "./Me";
import Brother from "./Brother";

const Father = ({ assets }) => {
  return (
    <div className="rounded-2xl border-2 border-amber-700 p-2">
      <h1>Father</h1>
      <section className="flex gap-2">
        <Me assets={assets} />
        <Brother />
      </section>
    </div>
  );
};

export default Father;

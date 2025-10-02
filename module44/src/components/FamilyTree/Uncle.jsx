import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div className="rounded-2xl border-2 border-blue-700 p-2">
      <h1>Uncle</h1>
      <section className="flex gap-2">
        {" "}
        <Cousin name="honey" />
        <Cousin name="Bunny" />
      </section>
    </div>
  );
};

export default Uncle;

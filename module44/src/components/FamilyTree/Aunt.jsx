import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Familytree";

const Aunt = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div className="rounded-2xl border-2 border-green-700 p-2">
      <h1>Aunt</h1>
      <button className="bg-green-200" onClick={() => setMoney(money + 3000)}>
        add
      </button>
      <section className="flex gap-2">
        {" "}
        <Cousin name="samim" />
        <Cousin name="jamil" />
      </section>
    </div>
  );
};

export default Aunt;

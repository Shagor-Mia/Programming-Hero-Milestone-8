import React, { use } from "react";
import { MoneyContext } from "./Familytree";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div className="p-2 items-center rounded-xl border-2 border-amber-700">
      <h1>Brother</h1>
      <button
        className="bg-red-200 px-2 rounded-lg"
        onClick={() => setMoney(money + 1000)}
      >
        add money
      </button>
    </div>
  );
};

export default Brother;

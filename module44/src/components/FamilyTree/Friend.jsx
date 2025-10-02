import React, { use } from "react";
import { MoneyContext } from "./Familytree";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div className="p-2 items-center rounded-xl border-2 border-amber-700">
      <h1>friend Got:{money}</h1>
    </div>
  );
};

export default Friend;

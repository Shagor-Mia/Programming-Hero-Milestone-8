import React, { createContext, useState } from "react";
import GrandPa from "./GrandPa";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const assets = "gold";
  const newAssets = "hera";
  const [money, setMoney] = useState(0);
  return (
    <div className="">
      <h1 className="text-2xl">FamilyTree</h1>
      <h2>Total money {money} tk</h2>

      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAssets}>
          <GrandPa assets={assets} />
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

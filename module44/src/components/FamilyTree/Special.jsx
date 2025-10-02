import React, { useContext } from "react";
import { AssetContext } from "./Familytree";

const Special = ({ assets }) => {
  const NewAssets = useContext(AssetContext);
  return (
    <div className="p-2 rounded-xl border-1 border-amber-300">
      <h1>Special:</h1>
      <p>Assets:{assets}</p>
      <p>NewAssets:{NewAssets}</p>
    </div>
  );
};

export default Special;

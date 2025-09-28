import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingOptions = ({ gymData }) => {
  const pricingData = use(gymData);

  return (
    <div className="my-10 contain mx-auto px-10">
      <h1 className="text-3xl">Packages of our GYM</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {pricingData.map((price) => (
          <PricingCard key={price.id} prices={price} />
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;

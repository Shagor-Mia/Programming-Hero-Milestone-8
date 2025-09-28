import React, { use } from "react";
import DaisyCard from "./DaisyCard";

const DaisyPricingOption = ({ gymData }) => {
  const pricingData = use(gymData);
  return (
    <div className="my-10 contain mx-auto px-10 mt-20">
      <h1 className="text-3xl">Packages of our GYM for daisy UI</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {pricingData.map((price) => (
          <DaisyCard key={price.id} prices={price} />
        ))}
      </div>
    </div>
  );
};

export default DaisyPricingOption;

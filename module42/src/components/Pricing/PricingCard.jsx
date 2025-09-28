import React from "react";
import { BadgeCheck } from "lucide-react";
import FeatureCard from "./FeatureCard";

const PricingCard = ({ prices }) => {
  const { name, price, description, features } = prices;

  return (
    <div className="bg-white  shadow-sm rounded-2xl p-5 flex flex-col justify-between gap-5">
      <div>
        {" "}
        <h1 className="text-3xl">{name}</h1>
        <h3 className="text-xl">${price} per/month</h3>
      </div>
      <div className="mt-4 bg-white shadow-lg p-2 rounded-xl flex-1">
        <p className="">{description}</p>

        {features.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
      <button className="btn w-full">Subscribe</button>
    </div>
  );
};

export default PricingCard;

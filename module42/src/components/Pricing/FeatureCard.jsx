import { BadgeCheck } from "lucide-react";
import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <p className="flex mt-2 gap-2">
      <BadgeCheck />
      {feature}
    </p>
  );
};

export default FeatureCard;

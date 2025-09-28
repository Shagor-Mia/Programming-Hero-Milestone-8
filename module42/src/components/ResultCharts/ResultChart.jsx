import { Line, LineChart, XAxis, YAxis } from "recharts";
import React from "react";

const studentData = [
  {
    id: 1,
    name: "Alice",
    physics: 85,
    math: 92,
    english: 78,
  },
  {
    id: 2,
    name: "Bob",
    physics: 74,
    math: 81,
    english: 88,
  },
  {
    id: 3,
    name: "Charlie",
    physics: 90,
    math: 95,
    english: 82,
  },
];

const ResultChart = () => {
  return (
    <div className="mt-20">
      <LineChart height={500} width={500} data={studentData}>
        <XAxis dataKey={"name"} />
        <YAxis width={"auto"} />
        <Line dataKey={"math"} />
        <Line dataKey={"english"} />
        <Line dataKey={"physics"} />
      </LineChart>
    </div>
  );
};

export default ResultChart;

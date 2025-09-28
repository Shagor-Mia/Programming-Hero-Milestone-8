import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarkChart = ({ marksData }) => {
  const getAllData = use(marksData);
  const getData = getAllData.data;
  console.log(getData);

  //   processing data for chart
  const markChartData = getData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      english: studentData.marks.english,
      math: studentData.marks.math,
    };
    const avg = (student.physics + student.english + student.math) / 3;
    student.avg = avg;

    return student;
  });
  console.log(markChartData);

  return (
    <div className="mt-20">
      <BarChart
        width={500}
        height={300}
        data={markChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="physics"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="english"
          fill="#82ca9d"
          activeBar={<Rectangle fill="purple" stroke="purple" />}
        />
        <Bar
          dataKey="math"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="yellow" />}
        />
        <Bar
          dataKey="avg"
          fill="#82ca9d"
          activeBar={<Rectangle fill="green" stroke="green" />}
        />
      </BarChart>

      <h1>hello</h1>
    </div>
  );
};

export default MarkChart;

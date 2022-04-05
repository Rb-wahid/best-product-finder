import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = ({ data }) => {
  return (
    <BarChart width={650} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip  />
      <Legend />
      <Bar dataKey="investment" fill="#35B6D4" />
      <Bar dataKey="revenue" fill="#6367F1" />
    </BarChart>
  );
};

export default Barchart;

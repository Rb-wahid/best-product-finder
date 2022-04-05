import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Linechart = ({data}) => {
    return (
      <LineChart
        width={650}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="investment" stroke="#3B82F6" />
        <Line type="monotone" dataKey="revenue" stroke="#35b6d4" />
      </LineChart>
    );
};

export default Linechart;
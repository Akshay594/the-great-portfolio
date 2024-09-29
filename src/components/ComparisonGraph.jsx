import React, { memo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Traditional', profitMargin: 15 },
  { name: 'AI-Driven', profitMargin: 20 },
];

const ComparisonGraph = memo(() => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Profit Margin (%)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="profitMargin" fill="#5A67D8" />
      </BarChart>
    </ResponsiveContainer>
  );
});

export default ComparisonGraph;
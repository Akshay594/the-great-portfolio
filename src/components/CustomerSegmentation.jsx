import React from 'react';

const mockSegmentationData = [
  { segment: 'High-Spenders', percentage: 30, description: 'Customers who spend significantly above the average.' },
  { segment: 'Frequent Buyers', percentage: 40, description: 'Customers with frequent repeat purchases.' },
  { segment: 'Deal Seekers', percentage: 20, description: 'Customers who typically buy products during sales and promotions.' },
  { segment: 'One-Time Shoppers', percentage: 10, description: 'Customers who have made only one purchase.' },
];

const CustomerSegmentation = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300">
      <h3 className="text-2xl font-bold text-indigo-400 mb-6">AI-Powered Customer Segmentation</h3>
      <p className="mb-4 text-indigo-200">
        AI can divide your customer base into segments, allowing for more targeted and personalized marketing efforts. Here are some key customer segments identified through AI:
      </p>
      <ul className="space-y-4">
        {mockSegmentationData.map((segment, index) => (
          <li key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <h4 className="text-xl text-indigo-300 mb-2">{segment.segment}</h4>
            <p className="text-gray-400">{segment.description}</p>
            <p className="text-indigo-200 font-semibold mt-2">Segment Size: {segment.percentage}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerSegmentation;

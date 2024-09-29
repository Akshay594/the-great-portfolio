import React from 'react';
import { ArrowRight } from 'lucide-react';

const PersonalizationInfographic = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-center">
      <div className="mb-4 sm:mb-0">
        <div className="bg-blue-500 text-white rounded-full p-6 mb-2">
          <span className="text-2xl font-bold">Data</span>
        </div>
        <p className="text-sm text-indigo-200">Customer Behavior &amp; Preferences</p>
      </div>

      <ArrowRight className="text-indigo-300 mb-4 sm:mb-0 sm:rotate-0 rotate-90" size={24} />

      <div className="mb-4 sm:mb-0">
        <div className="bg-green-500 text-white rounded-full p-6 mb-2">
          <span className="text-2xl font-bold">Analysis</span>
        </div>
        <p className="text-sm text-indigo-200">AI Models Analyze Data</p>
      </div>

      <ArrowRight className="text-indigo-300 mb-4 sm:mb-0 sm:rotate-0 rotate-90" size={24} />

      <div className="mb-4 sm:mb-0">
        <div className="bg-yellow-500 text-white rounded-full p-6 mb-2">
          <span className="text-2xl font-bold">Personalization</span>
        </div>
        <p className="text-sm text-indigo-200">Tailored Recommendations</p>
      </div>

      <ArrowRight className="text-indigo-300 mb-4 sm:mb-0 sm:rotate-0 rotate-90" size={24} />

      <div className="mb-4 sm:mb-0">
        <div className="bg-red-500 text-white rounded-full p-6 mb-2">
          <span className="text-2xl font-bold">Action</span>
        </div>
        <p className="text-sm text-indigo-200">Customer Receives Offers</p>
      </div>
    </div>
  );
};

export default PersonalizationInfographic;

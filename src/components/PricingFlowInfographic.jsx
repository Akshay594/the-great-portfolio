import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

const PricingFlowInfographic = memo(() => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-center">
      <div className="mb-4 sm:mb-0">
        <div className="bg-blue-500 text-white rounded-full p-4 mb-2 hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold">Data</span>
        </div>
        <p className="text-sm">Collection</p>
      </div>
      <ArrowRight className="text-indigo-300 mb-4 sm:mb-0 sm:rotate-0 rotate-90" size={24} />
      <div className="mb-4 sm:mb-0">
        <div className="bg-green-500 text-white rounded-full p-4 mb-2 hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold">Analysis</span>
        </div>
        <p className="text-sm">AI Processing</p>
      </div>
      <ArrowRight className="text-indigo-300 mb-4 sm:mb-0 sm:rotate-0 rotate-90" size={24} />
      <div className="mb-4 sm:mb-0">
        <div className="bg-yellow-500 text-white rounded-full p-4 mb-2 hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold">Decision</span>
        </div>
        <p className="text-sm">Price Optimization</p>
      </div>
      <ArrowRight className="text-indigo-300 mb-4 sm:mb-0 sm:rotate-0 rotate-90" size={24} />
      <div>
        <div className="bg-red-500 text-white rounded-full p-4 mb-2 hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-bold">Action</span>
        </div>
        <p className="text-sm">Price Adjustment</p>
      </div>
    </div>
  );
});

export default PricingFlowInfographic;
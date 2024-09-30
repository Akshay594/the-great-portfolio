import React, { useState } from 'react';

const PricingPlayground = () => {
  const [cost, setCost] = useState(100);
  const [competitorPrice, setCompetitorPrice] = useState(120);
  const [demand, setDemand] = useState(80);
  const [aiSuggestedPrice, setAiSuggestedPrice] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Simulate AI price calculation
  const calculatePrice = () => {
    setIsCalculating(true);

    // Ensure inputs are treated as numbers by using parseFloat()
    const numericCost = parseFloat(cost);
    const numericCompetitorPrice = parseFloat(competitorPrice);
    const numericDemand = parseFloat(demand);

    // Simulating a delay (e.g., like a model processing time)
    setTimeout(() => {
      const price = numericCost + (numericCompetitorPrice - numericCost) * (numericDemand / 100);
      setAiSuggestedPrice(price.toFixed(2)); // toFixed works on numbers
      setIsCalculating(false);
    }, 2000); // 2-second delay to simulate AI calculation
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg text-gray-300 mt-12 shadow-lg shadow-indigo-700/50">
      <h3 className="text-2xl font-bold text-indigo-400 mb-4">AI-Powered Pricing Playground</h3>
      <p className="mb-6">
        Enter your product details below and see how an AI-driven pricing model dynamically adjusts based on your inputs.
      </p>
      
      <div className="flex flex-col space-y-4">
        <label className="flex items-center justify-between">
          <span className="w-40 text-indigo-200">Cost Price ($):</span>
          <input
            type="number"
            className="px-4 py-2 bg-gray-900 rounded-lg text-white w-32"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="w-40 text-indigo-200">Competitor Price ($):</span>
          <input
            type="number"
            className="px-4 py-2 bg-gray-900 rounded-lg text-white w-32"
            value={competitorPrice}
            onChange={(e) => setCompetitorPrice(e.target.value)}
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="w-40 text-indigo-200">Demand (%):</span>
          <input
            type="number"
            className="px-4 py-2 bg-gray-900 rounded-lg text-white w-32"
            value={demand}
            onChange={(e) => setDemand(e.target.value)}
          />
        </label>

        <button
          onClick={calculatePrice}
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-300 hover:scale-105 transform mt-4"
        >
          Calculate AI-Suggested Price
        </button>

        {isCalculating ? (
          <div className="mt-6 text-xl text-indigo-400 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-indigo-500 mr-2"></div>
            Processing AI Model...
          </div>
        ) : (
          aiSuggestedPrice && (
            <div className="mt-6 text-xl text-indigo-300">
              <strong>AI Suggested Price: </strong>${aiSuggestedPrice}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PricingPlayground;

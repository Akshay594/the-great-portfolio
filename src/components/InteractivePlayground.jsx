import React, { useState } from 'react';

const recommendations = [
  { product: "Nike Running Shoes", similarity: 95 },
  { product: "Adidas Gym Bag", similarity: 85 },
  { product: "Puma Sports Watch", similarity: 78 },
];

const InteractivePlayground = () => {
  const [userInterests, setUserInterests] = useState('');
  const [results, setResults] = useState([]);

  const recommendationEngine = (userData) => {
    return recommendations.filter(product => product.similarity > 80);
  };

  const handleClick = () => {
    const result = recommendationEngine({ interests: userInterests });
    setResults(result);
  };

  return (
    <div className="my-8 bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-indigo-300 mb-4">AI Recommendation Playground</h3>
      <input
        type="text"
        value={userInterests}
        onChange={(e) => setUserInterests(e.target.value)}
        placeholder="Enter your interests (e.g., 'running, fitness')"
        className="p-2 mb-4 w-full text-black rounded-lg"
      />
      <button
        onClick={handleClick}
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
      >
        Get Recommendations
      </button>

      <ul className="mt-4 text-white">
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} className="my-2">Recommended: {item.product} (Similarity: {item.similarity}%)</li>
          ))
        ) : (
          <p>No recommendations yet. Enter interests and click the button to see results!</p>
        )}
      </ul>
    </div>
  );
};

export default InteractivePlayground;

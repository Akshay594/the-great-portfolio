import React, { useState } from 'react';

const RecommendationSimulator = () => {
  const recommendations = [
    { product: "Nike Running Shoes", score: 95, tags: ["running", "fitness"] },
    { product: "Adidas Gym Bag", score: 85, tags: ["gym", "fitness"] },
    { product: "Puma Sports Watch", score: 78, tags: ["watch", "sports"] },
    { product: "Reebok Training Shoes", score: 88, tags: ["training", "running"] },
  ];

  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const availableTags = ["running", "fitness", "gym", "sports", "training", "watch"];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const recommendProducts = () => {
    const result = recommendations.filter(product => 
      selectedTags.some(tag => product.tags.includes(tag)) && product.score > 80
    );
    setFilteredProducts(result);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-indigo-200 mb-4">AI Product Recommendation Simulator</h3>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-indigo-300">Select Categories:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full border ${selectedTags.includes(tag) ? 'bg-indigo-500 text-white' : 'border-gray-400 text-gray-300'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={recommendProducts}
        className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-300"
      >
        Get Recommendations
      </button>

      <div className="mt-6">
        {filteredProducts.length > 0 ? (
          <ul className="list-disc ml-6 text-gray-300">
            {filteredProducts.map((product, index) => (
              <li key={index}>{product.product} (Score: {product.score})</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No recommendations yet. Select categories to see results.</p>
        )}
      </div>
    </div>
  );
};

export default RecommendationSimulator;

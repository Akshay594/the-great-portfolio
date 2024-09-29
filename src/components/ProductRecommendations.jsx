import React, { useState, useEffect } from 'react';

const mockProductData = [
  { id: 1, name: 'Smartphone X', category: 'Electronics', price: 999 },
  { id: 2, name: 'Smart Watch Z', category: 'Wearables', price: 299 },
  { id: 3, name: 'Laptop Pro 13"', category: 'Computers', price: 1299 },
  { id: 4, name: 'Wireless Earbuds', category: 'Audio', price: 149 },
  { id: 5, name: 'Smart TV 55"', category: 'Home Entertainment', price: 799 },
];

const mockUserInteractions = {
  category: 'Electronics',
  viewedProducts: [1, 3],
};

const ProductRecommendations = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // Simulate AI-driven product recommendations based on user interactions
    const recommendations = mockProductData.filter((product) => {
      return (
        product.category === mockUserInteractions.category &&
        !mockUserInteractions.viewedProducts.includes(product.id)
      );
    });
    setRecommendedProducts(recommendations);
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg text-gray-300 shadow-lg shadow-indigo-700/50">
      <h3 className="text-2xl font-bold text-indigo-400 mb-4">Personalized Product Recommendations</h3>
      <p className="mb-6">
        Based on your recent interactions, we’ve handpicked a few products you might be interested in:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedProducts.length > 0 ? (
          recommendedProducts.map((product) => (
            <div key={product.id} className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h4 className="text-xl text-indigo-300 mb-2">{product.name}</h4>
              <p className="text-gray-400 mb-2">Category: {product.category}</p>
              <p className="text-indigo-200 font-semibold">${product.price}</p>
              <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-300 hover:scale-105 transform">
                View Product
              </button>
            </div>
          ))
        ) : (
          <p>No recommendations available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ProductRecommendations;

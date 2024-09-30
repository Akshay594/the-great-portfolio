import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';

const generateRandomPrice = () => Math.floor(Math.random() * (300 - 50 + 1) + 50);
const generateRandomRating = () => Math.floor(Math.random() * 5) + 1;

const products = [
  { id: 1, name: 'Ultra Boost Running Shoes', category: 'Running', emoji: '👟' },
  { id: 2, name: 'Smart Fitness Tracker', category: 'Fitness', emoji: '⌚' },
  { id: 3, name: 'Waterproof Hiking Boots', category: 'Outdoor', emoji: '🥾' },
  { id: 4, name: 'Durable Travel Backpack', category: 'Travel', emoji: '🎒' },
  { id: 5, name: 'GPS Sports Watch', category: 'Electronics', emoji: '📡' },
  { id: 6, name: 'Wireless Earbuds', category: 'Audio', emoji: '🎧' },
].map(product => ({ 
  ...product, 
  price: generateRandomPrice(),
  rating: generateRandomRating()
}));

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}
        />
      ))}
    </div>
  );
};

const AIPersonalizationPlayground = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [personalizedProducts, setPersonalizedProducts] = useState(products);
  const [userPreferences, setUserPreferences] = useState({ likedProducts: [] });

  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    const simulateAIPersonalization = () => {
      let filteredProducts = products;

      if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
          selectedCategories.includes(product.category)
        );
      }

      filteredProducts = filteredProducts.filter(product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      const scoredProducts = filteredProducts.map(product => ({
        ...product,
        score: userPreferences.likedProducts.includes(product.id) ? 1 : 0
      }));

      scoredProducts.sort((a, b) => b.score - a.score);

      setPersonalizedProducts(scoredProducts);
    };

    simulateAIPersonalization();
  }, [searchTerm, selectedCategories, priceRange, userPreferences]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleLikeProduct = (productId) => {
    setUserPreferences(prev => ({
      ...prev,
      likedProducts: prev.likedProducts.includes(productId)
        ? prev.likedProducts.filter(id => id !== productId)
        : [...prev.likedProducts, productId]
    }));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-300 mb-4">AI Personalization Playground</h2>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-700 text-white border border-gray-600 rounded p-2"
        />
        <div>
          <p className="text-sm text-gray-300 mb-2">Categories:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategories.includes(category)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-700 text-gray-300 border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-300 mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
          <input
            type="range"
            min="0"
            max="300"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {personalizedProducts.map((product) => (
          <div key={product.id} className="bg-gray-700 rounded-lg overflow-hidden">
            <div className="h-40 flex items-center justify-center text-6xl bg-gray-600">
              {product.emoji}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{product.category}</p>
              <p className="text-xl font-bold text-indigo-400">${product.price}</p>
              <div className="flex justify-between items-center mt-4">
                <StarRating rating={product.rating} />
                <button
                  onClick={() => handleLikeProduct(product.id)}
                  className={`p-2 rounded-full ${
                    userPreferences.likedProducts.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIPersonalizationPlayground;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Blog = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "How JaanchAI Enhances Sales Performance",
      content: [
        {
          subtitle: "1. Real-Time Sales Forecasting",
          text: "JaanchAI uses advanced machine learning models to predict future sales trends in real-time, considering customer behavior, seasonality, and competitor data. This allows businesses to manage stock better and make strategic decisions with accurate insights."
        },
        {
          subtitle: "2. Dynamic Pricing Optimization",
          text: "JaanchAI automates dynamic pricing by analyzing market demand, competitor prices, and customer sentiment, ensuring that your prices are always optimized to drive revenue and profit."
        },
        {
          subtitle: "3. Competitor Analysis and Insights",
          text: "JaanchAI monitors competitors continuously, providing real-time analysis of their pricing, promotions, and sales strategies, helping you stay competitive with actionable data."
        }
      ]
    },
    {
      title: "Sales Automation and Efficiency",
      content: [
        {
          text: "JaanchAI automates sales workflows, reducing the need for manual tasks such as data entry and report generation. With smart AI-powered recommendations for upselling and cross-selling, businesses can drive more value without adding operational complexity."
        }
      ]
    },
    {
      title: "Why JaanchAI is the Future of Sales Analytics",
      content: [
        {
          text: "JaanchAI is built to scale with businesses of all sizes, offering powerful insights across multiple sales channels. Its user-friendly interface makes it accessible for teams without deep technical expertise, while still providing the depth and power needed for advanced analytics."
        }
      ]
    },
    {
      title: "Real-World Impact: Case Studies",
      content: [
        {
          text: "JaanchAI has already started transforming businesses, offering significant improvements in sales performance and operational efficiency. By leveraging the power of AI, businesses have reported more accurate sales forecasts, optimized pricing strategies, and streamlined sales workflows."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-900 to-indigo-900 text-white min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
          Revolutionizing Sales Analytics with AI
        </h1>
        <p className="text-xl text-indigo-200">How JaanchAI is Transforming the Game</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">Introduction: The Need for AI in Sales Analytics</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          The complexity of modern sales strategies has grown exponentially. Businesses today deal with vast amounts of data, making manual sales analysis slow and ineffective. Traditional tools simply cannot keep up with the need for real-time data-driven decision-making.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Enter <span className="text-indigo-400 font-semibold">JaanchAI</span>, a game-changer for businesses looking to optimize their sales strategies with the power of artificial intelligence.
        </p>
      </section>

      {sections.map((section, index) => (
        <div key={index} className="mb-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out">
          <button
            className="w-full p-4 text-left bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            {expandedSection === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          {expandedSection === index && (
            <div className="p-6">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4">
                  {item.subtitle && <h3 className="text-xl font-semibold text-indigo-300 mb-2">{item.subtitle}</h3>}
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <section className="mt-12 bg-indigo-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Conclusion: The Future of Sales with JaanchAI</h2>
        <p className="text-lg text-indigo-100 leading-relaxed">
          JaanchAI is more than just another sales tool. It's an AI-powered platform that empowers businesses to optimize their sales strategies, reduce operational costs, and stay ahead of the competition. With real-time forecasting, dynamic pricing, and automated insights, JaanchAI is driving the future of sales analytics.
        </p>
      </section>
    </div>
  );
};

export default Blog;
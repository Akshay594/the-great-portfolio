import React, { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Header from './Header';
import { Helmet } from 'react-helmet';

const LazyComparisonGraph = lazy(() => import('./ComparisonGraph'));
const LazyPricingFlowInfographic = lazy(() => import('./PricingFlowInfographic'));

const SectionHeader = ({ title }) => (
  <h2 className="text-4xl font-bold text-indigo-300 mb-6">{title}</h2>
);

const PricingPlayground = () => {
  const [cost, setCost] = useState(100);
  const [competitorPrice, setCompetitorPrice] = useState(120);
  const [demand, setDemand] = useState(80);
  const [aiSuggestedPrice, setAiSuggestedPrice] = useState(null);

  const calculatePrice = () => {
    const price = cost + (competitorPrice - cost) * (demand / 100);
    setAiSuggestedPrice(price.toFixed(2));
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

        {aiSuggestedPrice && (
          <div className="mt-6 text-xl text-indigo-300">
            <strong>AI Suggested Price: </strong>${aiSuggestedPrice}
          </div>
        )}
      </div>
    </div>
  );
};

const BlogPost = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Helmet>
        <title>Revolutionizing Pricing Strategies: The AI Advantage | JaanchAI Blog</title>
        <meta name="description" content="Explore how AI is transforming pricing strategies, offering solutions to real-world challenges that companies face daily." />
      </Helmet>
      <Header />
      <main className="pt-28 pb-20 text-gray-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link to="/blog" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mb-10">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
          
          <article className="prose prose-xl prose-invert prose-indigo max-w-none space-y-14">
            <header className="mb-14">
              <h1 className="text-4xl sm:text-5xl font-bold text-indigo-300 mb-6">Revolutionizing Pricing Strategies: The AI Advantage</h1>
              <div className="flex flex-wrap items-center text-gray-400 space-x-6">
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>September 29, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" size={16} />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2" size={16} />
                  <span>Gopal Singh</span>
                </div>
              </div>
            </header>

            <section>
              <p className="text-xl text-indigo-200 font-semibold leading-relaxed">
                What if your company could increase its profit margins by 5% overnight?<br/><br/> With AI-driven pricing, companies are not just improving margins—they're transforming how they approach pricing altogether. 
                <br/><br/> 
                By 2025, over 80% of large retailers are expected to adopt AI for pricing decisions.
              </p>
            </section>

            <section>
              <SectionHeader title="The Evolution of Pricing Strategies" />
              <p className="leading-relaxed">
                Historically, businesses have relied on pricing models such as cost-plus, market-driven, and basic forms of dynamic pricing. While these methods have served companies well in the past, they're increasingly inadequate in today's data-rich, fast-moving markets.
              </p>
              <p className="leading-relaxed">
                The limitations of these traditional models lie in their inability to process and respond to the vast amount of data now available. With rapidly evolving market dynamics, competitor pricing, customer behavior, and inventory changes, businesses require more sophisticated systems to stay competitive. This is where AI steps in, offering real-time data integration and predictive analytics for more accurate pricing decisions.
              </p>
            </section>

            <section>
              <SectionHeader title="AI-Driven Pricing Playground" />
              <PricingPlayground />
            </section>

            <section>
              <SectionHeader title="AI-Driven Solutions: The Power of Forecasting" />
              <p className="leading-relaxed">
                Machine learning (ML) plays a critical role in modern AI-driven pricing strategies. Here are some of the models and techniques commonly used to predict optimal pricing decisions:
              </p>

              <h3 className="text-2xl font-semibold text-indigo-200 mb-4">1. ARIMA (AutoRegressive Integrated Moving Average)</h3>
              <p className="leading-relaxed">
                ARIMA is a popular statistical model used to analyze time series data, like pricing trends. It’s particularly good at forecasting based on historical data. Think of it as a way to predict future prices by examining patterns from the past.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-200 mb-4">2. LSTM (Long Short-Term Memory Networks)</h3>
              <p className="leading-relaxed">
                LSTM is a type of neural network used to capture complex patterns in data, especially when information changes over time. In pricing, LSTM helps by analyzing long-term trends, such as how demand shifts over time and how seasonal patterns affect pricing. It’s like a highly advanced pattern detector that adjusts prices in real-time.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-200 mb-4">3. Reinforcement Learning</h3>
              <p className="leading-relaxed">
                Reinforcement learning is a branch of machine learning where the AI learns to make decisions by receiving feedback (rewards or penalties) based on its actions. In pricing, this model can continuously adapt and learn the best prices based on real-time outcomes—like a system that gets smarter with every sale.
              </p>
              
              <div className="my-10">
                <Suspense fallback={<div className="text-center text-indigo-400">Loading graph...</div>}>
                  <LazyComparisonGraph />
                </Suspense>
                <p className="text-sm text-gray-400 mt-2">
                  Fig 1: Comparison of profit margins before and after implementing AI-driven pricing strategies
                </p>
              </div>

              <div className="my-10">
                <Suspense fallback={<div className="text-center text-indigo-400">Loading infographic...</div>}>
                  <LazyPricingFlowInfographic />
                </Suspense>
                <p className="text-sm text-gray-400 mt-2">
                  Fig 2: The flow of AI-powered pricing: data {'>'} analysis{'>'} decision {'>'} action
                </p>
              </div>
            </section>

            <section>
              <SectionHeader title="The Future of Pricing with AI" />
              <p className="leading-relaxed">
                As AI technology continues to evolve, we can expect even more sophisticated pricing strategies to emerge. Key trends to watch include hyper-personalization, predictive pricing, ethical AI pricing, and integration with IoT. 
              </p>
              <p className="leading-relaxed">
                Major retailers like Best Buy are already experimenting with hyper-personalized pricing, offering dynamic discounts based on individual browsing history and past purchases. As AI models become more advanced, businesses will be able to predict market changes before they occur, allowing them to set optimal prices proactively rather than reactively.
              </p>
            </section>

            <section className="bg-indigo-900 p-10 rounded-lg mt-16">
              <SectionHeader title="Experience the Power of AI Pricing with JaanchAI" />
              <p className="text-lg mb-6 leading-relaxed">
                Join us for an exclusive demo and see how JaanchAI's seamless integration of real-time data and intelligent forecasting can give your business the competitive edge it needs.
              </p>
              <a 
                href="https://www.jaanch.ai/talk-to-expert"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 hover:scale-105 transform"
                aria-label="Register for Demo"
              >
                Register for Demo
              </a>
            </section>
          </article>

          <div className="mt-16 border-t border-gray-700 pt-8">
            <Link to="/blog" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;

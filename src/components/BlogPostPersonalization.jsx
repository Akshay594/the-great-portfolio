import React from 'react';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import AIPersonalizationPlayground from './AIPersonalizationPlayground';
import { Link } from 'react-router-dom';

const SectionHeader = ({ title }) => (
  <h2 className="text-3xl font-bold text-indigo-300 mb-4">{title}</h2>
);

const BlogPostPersonalization = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300 mt-24">
      <main className="pt-10 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mb-10">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
          
          
          <article className="space-y-10">
            <header className="mb-12">
              <h1 className="text-4xl font-extrabold text-indigo-300 mb-4">AI and Personalization: Revolutionizing Customer Experience in E-commerce</h1>
              <div className="flex flex-wrap items-center text-gray-400 space-x-6">
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>October 1, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" size={16} />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2" size={16} />
                  <span>Gopal Singh</span>
                </div>
              </div>
            </header>

            <section className="bg-gray-800 p-6 rounded-lg">
              <p className="text-xl text-indigo-200 font-semibold leading-relaxed">
                In the fast-paced world of e-commerce, staying ahead of the competition means embracing cutting-edge technologies like AI and personalization. Learn how they're transforming customer experiences and boosting sales.
              </p>
            </section>

            <section>
              <SectionHeader title="Understanding AI and Personalization in E-commerce" />
              <p className="mb-4">
                AI has drastically transformed how businesses interact with customers. In e-commerce, AI models analyze customer data—browsing habits, purchase history, and even real-time behavior—to deliver personalized experiences. This level of personalization ensures that every shopper feels as if the entire store is tailored just for them.
              </p>
              <p className="mb-4">
                Imagine AI as your virtual shopping assistant, continuously learning about your preferences with each interaction. This allows businesses to make precise product recommendations, predict trends, and adjust prices in real time based on market demand.
              </p>
            </section>

            <section>
              <SectionHeader title="Interactive AI Personalization Demo" />
              <p className="mb-6">
                Experience the power of AI personalization firsthand with our interactive demo below. Search for products, filter by category and price, and 'like' items to see how the AI adapts its recommendations based on your preferences.
              </p>
              <AIPersonalizationPlayground />
            </section>

            <section>
              <SectionHeader title="How AI Enhances Personalization" />
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-indigo-300">Product Recommendations</strong>: AI suggests products based on browsing history and past purchases.</li>
                <li><strong className="text-indigo-300">Dynamic Pricing</strong>: AI adjusts prices in real-time by analyzing demand and competitor pricing.</li>
                <li><strong className="text-indigo-300">Personalized Search Results</strong>: AI customizes search results to align with customer preferences.</li>
                <li><strong className="text-indigo-300">Chatbots and Virtual Assistants</strong>: AI chatbots offer 24/7 personalized customer support.</li>
                <li><strong className="text-indigo-300">Email Marketing</strong>: AI optimizes email marketing by segmenting audiences and personalizing content.</li>
              </ul>
            </section>

            <section className="bg-indigo-900 p-8 rounded-lg">
              <SectionHeader title="Revolutionize Your E-commerce Experience" />
              <p className="text-lg mb-6">
                Interested in seeing how AI-powered personalization can transform your business? Contact us today for a free consultation.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">
                Register for Demo
              </button>
            </section>
          </article>

          <div className="mt-10 pt-6 border-t border-gray-700">
            <button className="text-indigo-400 hover:text-indigo-300 flex items-center bg-transparent border-none cursor-pointer">
              <Link to="/blog" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mb-10">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>
            
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPersonalization;
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Header from './Header';
import { Helmet } from 'react-helmet';

const LazyRecommendationSimulator = lazy(() => import('./RecommendationSimulator'));

const SectionHeader = ({ title }) => (
  <h2 className="text-4xl font-bold text-indigo-300 mb-6">{title}</h2>
);

const BlogPostPersonalization = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <Helmet>
        <title>AI and Personalization: Revolutionizing Customer Experience in E-commerce</title>
        <meta name="description" content="Discover how AI is revolutionizing e-commerce with personalized customer experiences." />
      </Helmet>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Link to="/blog" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mb-10">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
          
          <article className="prose prose-lg prose-invert prose-indigo max-w-none space-y-14">
            <header className="mb-12">
              <h1 className="text-5xl font-extrabold text-indigo-300 mb-4">AI and Personalization: Revolutionizing Customer Experience in E-commerce</h1>
              <div className="flex flex-wrap items-center text-gray-400 space-x-6">
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>September 29, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" size={16} />
                  <span>3 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2" size={16} />
                  <span>Gopal Singh</span>
                </div>
              </div>
            </header>

            <section>
              <p className="text-xl text-indigo-200 font-semibold leading-relaxed">
                In the fast-paced world of e-commerce, staying ahead of the competition means embracing cutting-edge technologies like AI and personalization. Learn how they’re transforming customer experiences and boosting sales.
              </p>
            </section>

            <section>
              <SectionHeader title="Understanding AI and Personalization" />
              <p className="leading-relaxed">
                AI in e-commerce uses machine learning models to track customer behavior, preferences, and purchase history. The more data AI processes, the better it becomes at predicting customer preferences and delivering personalized shopping experiences.
              </p>
            </section>

            <section>
              <SectionHeader title="How AI Drives Personalization" />
              <ul className="list-disc ml-6 leading-relaxed">
                <li>Product Recommendations: AI suggests products based on browsing history and purchase patterns.</li>
                <li>Dynamic Pricing: AI adjusts prices in real-time based on demand and customer behavior.</li>
                <li>Personalized Search Results: AI tailors search results to user preferences.</li>
                <li>Chatbots and Virtual Assistants: AI chatbots deliver personalized customer service.</li>
                <li>Email Marketing: AI segments audiences and personalizes email content for better engagement.</li>
              </ul>
            </section>

            <section>
              <SectionHeader title="AI Product Recommendation System" />
              <p className="leading-relaxed">
                Choose your categories to see personalized product recommendations powered by AI:
              </p>
              <Suspense fallback={<div className="text-indigo-400">Loading recommendation system...</div>}>
                <LazyRecommendationSimulator />
              </Suspense>
            </section>

            <section>
              <SectionHeader title="Real-World Success: Nike’s AI-Powered Shopping Experience" />
              <p className="leading-relaxed">
                Nike uses AI to personalize product recommendations by analyzing customer data like past purchases and fitness activities. This system increased conversion rates by 20% and helped optimize inventory management.
              </p>
            </section>

            <section className="bg-indigo-900 p-10 rounded-lg mt-16">
              <SectionHeader title="Revolutionize Your E-commerce Experience" />
              <p className="text-lg mb-6 leading-relaxed">
                Interested in seeing how AI-powered personalization can transform your business? Contact us today for a free consultation.
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

export default BlogPostPersonalization;

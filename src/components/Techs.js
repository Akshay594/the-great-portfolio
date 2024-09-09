import React from 'react';

const Techs = () => {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-4xl font-bold mb-5 text-blue-400">Techs</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">Machine Learning</p>
        </div>
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">Natural Language Processing</p>
        </div>
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">Data Analytics</p>
        </div>
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">AI Architectures</p>
        </div>
      </div>
    </div>
  );
};

export default Techs;

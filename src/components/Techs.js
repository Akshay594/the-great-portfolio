import React from 'react';

const Techs = () => {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-4xl font-bold mb-5 text-blue-400">Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">Rust</p>
        </div>
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">PostgreSQL</p>
        </div>
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">Python</p>
        </div>
        <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-300">LLM Observability</p>
        </div>
      </div>
    </div>
  );
};

export default Techs;

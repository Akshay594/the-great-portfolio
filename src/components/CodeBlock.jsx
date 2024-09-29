import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

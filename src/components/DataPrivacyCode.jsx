import React from 'react';
import CodeBlock from './CodeBlock'; // Assuming you have a component to display code

const DataPrivacyCode = () => {
  const code = `
import hashlib

def anonymize_user_data(user_data):
    anonymized_data = user_data.copy()
    anonymized_data['user_id'] = hashlib.sha256(user_data['user_id'].encode()).hexdigest()
    return anonymized_data

user = {'user_id': 'john_doe', 'preferences': ['shoes', 'electronics']}
anonymous_user = anonymize_user_data(user)
print(anonymous_user)
  `;

  return <CodeBlock code={code} language="python" />;
};

export default DataPrivacyCode;

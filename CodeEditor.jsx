import React from 'react';

const CodeEditor = ({ code, onCodeChange }) => {
  const handleCodeChange = (e) => {
    onCodeChange(e.target.value);
  };

  return (
    <div className="code-editor">
      <div className="line-numbers">
        {code.split('\n').map((_, index) => (
          <span key={index} className="line-number">
            {index + 1}
          </span>
        ))}
      </div>
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
        placeholder="Enter your code here"
      />
    </div>
  );
};

export default CodeEditor;

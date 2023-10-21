import React, { useState } from 'react';
import './Home.css';
import Prism from 'prismjs'; // Import Prism.js
import 'prismjs/components/prism-javascript';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Question = ({ title, description, tags, date, onDelete, index, image, code }) => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  const codeStyle = {
    fontSize: '10px', // Adjust the font size as per your preference
    backgroundColor: "#1E1E1E"
  };

  return (
    <div className="question-box">
      <div className="question">
        {image && <img src={image} alt="" />}
        <h3>{title}</h3>
        <div className="buttons">
          <button onClick={toggleExpansion} className="expand-button">
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {isExpanded && (
        <div className="question">
          <br></br>
          <p>{description}</p>
          {/* Render the code data */}
          {/* <pre style={{marginBottom:"10px"}}>{code}</pre> */}
          <SyntaxHighlighter language="javascript" style={dark} customStyle={codeStyle}>
      {code}
    </SyntaxHighlighter>
          <div className="tags">
            <strong>Tags:</strong>
            <span key={index}>{tags}</span>
          </div>
          <p className="date">{date}</p>
        </div>
      )}
    </div>
  );
};

export default Question;

import React from 'react';
import './Completion.css';
import { useNavigate } from 'react-router-dom';

function Completion() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');// Redirect to the home page
  };

  return (
    <div className="completion-page">
      <h1>Payment Completed</h1>
      <p>Thank you for choosing our service!</p>
      <p>Your payment has been successfully processed.</p>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default Completion;

// Import necessary React libraries and CSS
import React from 'react';
import './SubscriptionPage.css';
import studentPlanImage from './Student.png';
import teacherPlanImage from './Teacher.png';
import premiumPlanImage from './Premium.png';
import freePlanImage from './Free.png';

// Create a React functional component for the Subscription Page
function SubscriptionPage() {
  return (
    <div className="subscription-page">
      <h1>Choose Your Plan</h1>
      <div className="subscription-plans">
        <div className="subscription-plan free-plan">
          <h2>Free Plan</h2>
          <img src={freePlanImage} alt="Free Plan" />
          <p className="price">₹0.00</p>
          <ul className="features">
            <li>Basic features</li>
            <li>Limited customization</li>
            <li>No analytics dashboard</li>
          </ul>
          <a href="https://buy.stripe.com/test_14k6rH44N7DPcCc145" className="buy-button">Buy</a>
        </div>
        <div className="subscription-plan premium-plan">
          <h2>Premium Plan</h2>
          <img src={premiumPlanImage} alt="Premium Plan" />
          <p className="price">₹259.99</p>
          <ul className="features">
            <li>Customization features like messages and banners</li>
            <li>Themes and content controls</li>
            <li>Analytics dashboard</li>
          </ul>
          <a href="https://buy.stripe.com/test_5kA9DT9p7cY97hSdQS" className="buy-button">Buy</a>
        </div>
        <div className="subscription-plan student-plan">
          <h2>Student Plan</h2>
          <img src={studentPlanImage} alt="Student Plan" />
          <p className="price">₹149.99</p>
          <ul className="features">
            <li>Special discounts for students</li>
            <li>Access to all premium features</li>
            <li>No analytics dashboard</li>
          </ul>
          <a href="https://buy.stripe.com/test_9AQ8zP30Jf6hcCcbIL" className="buy-button">Buy</a>
        </div>
        <div className="subscription-plan teacher-plan">
          <h2>Teacher Plan</h2>
          <img src={teacherPlanImage} alt="Teacher Plan" />
          <p className="price">₹149.99</p>
          <ul className="features">
            <li>Designed for educators</li>
            <li>Special features for managing classes and assignments</li>
            <li>No analytics dashboard</li>
          </ul>
          <a href="https://buy.stripe.com/test_fZe3fv6cV5vH7hS6os" className="buy-button">Buy</a>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;

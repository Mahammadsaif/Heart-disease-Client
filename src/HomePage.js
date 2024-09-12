import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/prediction");
    };

    return (
        <div className="home-container">
            <h1>Heart Disease Predictor</h1>
            <p>This is only for prediction purposes. Please consult a doctor for medical advice.</p>
            <button onClick={handleStart}>Start Now</button>
        </div>
    );
};

export default HomePage;

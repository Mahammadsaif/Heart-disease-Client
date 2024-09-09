import React, { useState } from 'react';
import axios from 'axios';
import './style.css';  // Import the CSS file

function HeartDiseaseForm() {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://heart-disease-api-fawn.vercel.app/predict', formData);
            setResult(response.data.message);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <div>
            <h1>Heart Disease Prediction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </label>

                <label>
                    Sex (1 = Male, 0 = Female):
                    <input type="number" name="sex" value={formData.sex} onChange={handleChange} required />
                </label>

                <label>
                    Chest Pain Type (0-3):
                    <input type="number" name="cp" value={formData.cp} onChange={handleChange} required />
                </label>

                <label>
                    Resting Blood Pressure:
                    <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} required />
                </label>

                <label>
                    Cholesterol:
                    <input type="number" name="chol" value={formData.chol} onChange={handleChange} required />
                </label>

                <label>
                    Fasting Blood Sugar (1 = True, 0 = False):
                    <input type="number" name="fbs" value={formData.fbs} onChange={handleChange} required />
                </label>

                <label>
                    Resting ECG (0-2):
                    <input type="number" name="restecg" value={formData.restecg} onChange={handleChange} required />
                </label>

                <label>
                    Max Heart Rate:
                    <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} required />
                </label>

                <label>
                    Exercise Induced Angina (1 = Yes, 0 = No):
                    <input type="number" name="exang" value={formData.exang} onChange={handleChange} required />
                </label>

                <label>
                    ST Depression:
                    <input type="number" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />
                </label>

                <label>
                    Slope of ST Segment (0-2):
                    <input type="number" name="slope" value={formData.slope} onChange={handleChange} required />
                </label>

                <label>
                    Number of Major Vessels (0-3):
                    <input type="number" name="ca" value={formData.ca} onChange={handleChange} required />
                </label>

                <label>
                    Thal (1 = Normal, 2 = Fixed Defect, 3 = Reversible Defect):
                    <input type="number" name="thal" value={formData.thal} onChange={handleChange} required />
                </label>

                <button type="submit">Predict</button>
            </form>

            {result && <h2 className={result.includes("does not") ? "error" : ""}>Prediction Result: {result}</h2>}

            <footer>
                <p>Made with ❤️ by [Saif Shaik]</p>
            </footer>
        </div>
    );
}

export default HeartDiseaseForm;

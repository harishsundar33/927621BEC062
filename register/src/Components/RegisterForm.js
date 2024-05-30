import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        companyname: "gomart",
        owneremail: "rahul@abc.edu",
        accesscode: "fkdljg",
        ownername: "rahul",
        rollno: "1"
    });
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://20.244.56.144/test/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err.response ? err.response.data : 'Error');
            setResponse(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Company Name:</label>
                    <input type="text" name="companyname" value={formData.companyname} onChange={handleChange} />
                </div>
                <div>
                    <label>Owner Email:</label>
                    <input type="email" name="owneremail" value={formData.owneremail} onChange={handleChange} />
                </div>
                <div>
                    <label>Access Code:</label>
                    <input type="text" name="accesscode" value={formData.accesscode} onChange={handleChange} />
                </div>
                <div>
                    <label>Owner Name:</label>
                    <input type="text" name="ownername" value={formData.ownername} onChange={handleChange} />
                </div>
                <div>
                    <label>Roll No:</label>
                    <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
            {response && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div>
                    <h3>Error:</h3>
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default RegisterForm;

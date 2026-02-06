import React, { useState, useEffect } from 'react'
import './AddData.css'
import { useParams, useNavigate } from 'react-router-dom';

function EditData() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        gender: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/viewuser/${id}`);
            const data = await response.json();
            setFormData({
                name: data.name || '',
                email: data.email || '',
                password: data.password || '',
                country: data.country || '',
                gender: data.gender || ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/updateUser/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('User updated successfully');
                navigate('/');
            } else {
                const err = await response.json();
                alert(err.message || 'Update failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    }

    return (
        <div className='form-container'>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='Name'>Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        id="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Country:</label>
                    <select name="country" required
                        onChange={handleChange} value={formData.country}>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Gender:</label>
                    <div className='radio-group'>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                required
                                onChange={handleChange}
                                checked={formData.gender === 'male'}
                            /> Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                required
                                onChange={handleChange}
                                checked={formData.gender === 'female'}
                            /> Female
                        </label>
                        <label>
                            <input type="radio"
                                name="gender"
                                value="other"
                                required
                                onChange={handleChange} checked={formData.gender === 'other'}
                            /> Other
                        </label>
                    </div>

                </div>
                <div className='form-actions'>
                    <button type="submit" className='btn btn-submit'>Update</button>
                </div>

            </form>

        </div>
    )
}

export default EditData

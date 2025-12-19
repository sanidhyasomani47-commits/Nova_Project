import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(formData.username, formData.password);
        if (success) {
            navigate('/admin');
        } else {
            setError('Invalid Credentials');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <div className="card" style={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Admin Login</h2>
                    {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} style={inputStyle} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={inputStyle} required />
                        <button type="submit" className="btn" style={{ width: '100%' }}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' };

export default LoginPage;

import React, { useState } from 'react';
import API from '../services/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({ fullName: '', email: '', mobile: '', city: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/contacts', formData);
            setStatus('success');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <h2 className="section-title">Contact Us</h2>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
                {status === 'success' && <div style={{ background: '#dcfce7', color: '#166534', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>Message sent successfully!</div>}
                {status === 'error' && <div style={{ background: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>Failed to send message.</div>}

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                    <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required style={inputStyle} />
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={inputStyle} />
                    <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required style={inputStyle} />
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required style={inputStyle} />
                    <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

const inputStyle = {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
};

export default ContactForm;

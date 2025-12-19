import React, { useState } from 'react';
import API from '../services/api';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            await API.post('/newsletter', { email });
            setMessage('Subscribed successfully!');
            setEmail('');
        } catch (error) {
            setMessage('Subscription failed.');
        }
    };

    return (
        <section className="section" style={{ textAlign: 'center' }}>
            <div style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', padding: '3rem', borderRadius: '20px', color: 'white' }}>
                <h2 style={{ color: 'white', marginBottom: '1rem' }}>Subscribe to our Newsletter</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Get the latest updates and news delivered to your inbox.</p>
                <form onSubmit={handleSubscribe} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ padding: '12px 24px', borderRadius: '50px', border: 'none', fontSize: '1rem', minWidth: '250px', outline: 'none' }}
                    />
                    <button type="submit" style={{ padding: '12px 30px', borderRadius: '50px', border: '2px solid white', background: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>
                        Subscribe
                    </button>
                </form>
                {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
            </div>
        </section>
    );
};

export default Newsletter;

import React, { useState, useEffect } from 'react';
import API from '../services/api';

const AdminNewsletter = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetchSubs();
    }, []);

    const fetchSubs = async () => {
        try {
            const res = await API.get('/newsletter');
            setSubscribers(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this subscriber?')) return;
        try {
            await API.delete(`/newsletter/${id}`);
            fetchSubs();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Newsletter Subscribers</h3>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
                {subscribers.length === 0 && <p>No subscribers found.</p>}
                {subscribers.map(s => (
                    <div key={s.id} style={{ background: 'white', padding: '0.8rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            {s.email} <span style={{ color: '#999', fontSize: '0.8rem' }}>({new Date(s.subscribed_at).toLocaleDateString()})</span>
                        </div>
                        <button onClick={() => handleDelete(s.id)} style={deleteBtnStyle}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const deleteBtnStyle = { background: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' };

export default AdminNewsletter;

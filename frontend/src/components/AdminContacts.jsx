import React, { useState, useEffect } from 'react';
import API from '../services/api';

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await API.get('/contacts');
            setContacts(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this contact?')) return;
        try {
            await API.delete(`/contacts/${id}`);
            fetchContacts();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Contact Submissions</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
                {contacts.length === 0 && <p>No contacts found.</p>}
                {contacts.map(c => (
                    <div key={c.id} style={{ background: 'white', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{c.full_name} ({c.email})</div>
                            <div>{c.mobile} - {c.city}</div>
                            <div style={{ fontSize: '0.8rem', color: '#666' }}>{new Date(c.created_at).toLocaleString()}</div>
                        </div>
                        <button onClick={() => handleDelete(c.id)} style={deleteBtnStyle}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const deleteBtnStyle = { background: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' };

export default AdminContacts;

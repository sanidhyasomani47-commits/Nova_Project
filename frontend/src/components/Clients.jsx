import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await API.get('/clients');
                setClients(res.data);
            } catch (error) {
                // Mock data fallback
                setClients([
                    { id: 1, name: 'John Doe', description: 'Amazing service! Highly recommended.', designation: 'CEO, TechCorp', image_url: 'https://via.placeholder.com/100' },
                    { id: 2, name: 'Jane Smith', description: 'They transformed our business.', designation: 'Marketing Dir, StudioX', image_url: 'https://via.placeholder.com/100' },
                ]);
            }
        };
        fetchClients();
    }, []);

    return (
        <section id="clients" className="section" style={{ background: '#f1f5f9', borderRadius: '1rem', padding: '60px 20px' }}>
            <h2 className="section-title">Happy Clients</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                {clients.map((client) => (
                    <div key={client.id} className="card" style={{ padding: '2rem', textAlign: 'center', maxWidth: '300px' }}>
                        <img src={client.image_url} alt={client.name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem', border: '3px solid #6366f1' }} />
                        <p style={{ fontStyle: 'italic', color: '#475569', marginBottom: '1rem' }}>"{client.description}"</p>
                        <h4 style={{ margin: 0 }}>{client.name}</h4>
                        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{client.designation}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;

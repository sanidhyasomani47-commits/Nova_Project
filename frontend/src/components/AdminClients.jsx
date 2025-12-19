import React, { useState, useEffect } from 'react';
import API from '../services/api';

const AdminClients = () => {
    const [clients, setClients] = useState([]);
    const [form, setForm] = useState({ name: '', description: '', designation: '', image_url: '' });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const res = await API.get('/clients');
            setClients(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await API.put(`/clients/${editingId}`, form);
                setEditingId(null);
            } else {
                await API.post('/clients', form);
            }
            setForm({ name: '', description: '', designation: '', image_url: '' });
            fetchClients();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (client) => {
        setForm({ name: client.name, description: client.description, designation: client.designation, image_url: client.image_url });
        setEditingId(client.id);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this client?')) return;
        try {
            await API.delete(`/clients/${id}`);
            fetchClients();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Manage Clients</h3>
            <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'grid', gap: '1rem', background: 'white', padding: '1rem', borderRadius: '8px' }}>
                <input placeholder="Client Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} required />
                <input placeholder="Designation" value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} style={inputStyle} required />
                <textarea placeholder="Testimonial" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} style={inputStyle} required />
                <input placeholder="Image URL" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} style={inputStyle} required />
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button type="submit" className="btn">{editingId ? 'Update Client' : 'Add Client'}</button>
                    {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', description: '', designation: '', image_url: '' }); }} style={cancelBtnStyle}>Cancel</button>}
                </div>
            </form>
            <div style={{ display: 'grid', gap: '1rem' }}>
                {clients.map(c => (
                    <div key={c.id} style={{ background: 'white', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <strong>{c.name}</strong> - {c.designation}
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => handleEdit(c)} style={editBtnStyle}>Edit</button>
                            <button onClick={() => handleDelete(c.id)} style={deleteBtnStyle}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' };
const editBtnStyle = { background: '#f59e0b', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' };
const deleteBtnStyle = { background: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' };
const cancelBtnStyle = { background: '#9ca3af', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' };

export default AdminClients;

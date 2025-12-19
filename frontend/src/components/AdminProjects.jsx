import React, { useState, useEffect } from 'react';
import API from '../services/api';

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState({ name: '', description: '', image_url: '' });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await API.get('/projects');
            setProjects(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await API.put(`/projects/${editingId}`, form);
                setEditingId(null);
            } else {
                await API.post('/projects', form);
            }
            setForm({ name: '', description: '', image_url: '' });
            fetchProjects();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (project) => {
        setForm({ name: project.name, description: project.description, image_url: project.image_url });
        setEditingId(project.id);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;
        try {
            await API.delete(`/projects/${id}`);
            fetchProjects();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Manage Projects</h3>
            <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'grid', gap: '1rem', background: 'white', padding: '1rem', borderRadius: '8px' }}>
                <input placeholder="Project Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} required />
                <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} style={inputStyle} required />
                <input placeholder="Image URL" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} style={inputStyle} required />
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button type="submit" className="btn">{editingId ? 'Update Project' : 'Add Project'}</button>
                    {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', description: '', image_url: '' }); }} style={cancelBtnStyle}>Cancel</button>}
                </div>
            </form>
            <div style={{ display: 'grid', gap: '1rem' }}>
                {projects.map(p => (
                    <div key={p.id} style={{ background: 'white', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <strong>{p.name}</strong>
                            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{p.description.substring(0, 50)}...</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => handleEdit(p)} style={editBtnStyle}>Edit</button>
                            <button onClick={() => handleDelete(p.id)} style={deleteBtnStyle}>Delete</button>
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

export default AdminProjects;

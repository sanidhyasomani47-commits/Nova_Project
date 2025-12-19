import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await API.get('/projects');
                setProjects(res.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                // Mock data fallback
                setProjects([
                    { id: 1, name: 'Project Alpha', description: 'A revolutionary fintech app.', image_url: 'https://via.placeholder.com/300' },
                    { id: 2, name: 'Beta Solutions', description: 'E-commerce platform for B2B.', image_url: 'https://via.placeholder.com/300' },
                    { id: 3, name: 'Gamma Design', description: 'Portfolio website for creatives.', image_url: 'https://via.placeholder.com/300' },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div>Loading Projects...</div>;

    return (
        <section id="projects" className="section">
            <h2 className="section-title">Our Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project) => (
                    <div key={project.id} className="card">
                        <img src={project.image_url} alt={project.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>{project.name}</h3>
                            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{project.description}</p>
                            <button className="btn" style={{ marginLeft: 0 }}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

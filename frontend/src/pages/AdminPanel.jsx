import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AdminProjects from '../components/AdminProjects';
import AdminClients from '../components/AdminClients';
import AdminContacts from '../components/AdminContacts';
import AdminNewsletter from '../components/AdminNewsletter';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <div>
            <Navbar />
            <div className="container section">
                <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <button className="btn" style={{ background: activeTab === 'projects' ? undefined : '#ccc' }} onClick={() => setActiveTab('projects')}>Projects</button>
                    <button className="btn" style={{ background: activeTab === 'clients' ? undefined : '#ccc' }} onClick={() => setActiveTab('clients')}>Clients</button>
                    <button className="btn" style={{ background: activeTab === 'contacts' ? undefined : '#ccc' }} onClick={() => setActiveTab('contacts')}>Contacts</button>
                    <button className="btn" style={{ background: activeTab === 'newsletter' ? undefined : '#ccc' }} onClick={() => setActiveTab('newsletter')}>Newsletter</button>
                </div>

                {activeTab === 'projects' && <AdminProjects />}
                {activeTab === 'clients' && <AdminClients />}
                {activeTab === 'contacts' && <AdminContacts />}
                {activeTab === 'newsletter' && <AdminNewsletter />}
            </div>
        </div>
    );
};

export default AdminPanel;

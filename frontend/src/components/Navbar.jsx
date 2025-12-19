import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext) || {}; // Handle context potentially being undefined if outside provider (though it shouldn't be)
    const navigate = useNavigate();

    const handleLogout = () => {
        if (logout) {
            logout();
            navigate('/');
        }
    };

    return (
        <nav style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Nova.
            </div>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                <li><a href="/#projects" style={{ textDecoration: 'none', color: '#334155', fontWeight: 500 }}>Projects</a></li>
                <li><a href="/#clients" style={{ textDecoration: 'none', color: '#334155', fontWeight: 500 }}>Clients</a></li>
                <li><a href="/#contact" style={{ textDecoration: 'none', color: '#334155', fontWeight: 500 }}>Contact</a></li>
                {user ? (
                    <>
                        <li><Link to="/admin" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>Admin</Link></li>
                        <li><button onClick={handleLogout} style={{ background: 'transparent', border: '1px solid #6366f1', color: '#6366f1', padding: '5px 15px', borderRadius: '20px' }}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/login" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

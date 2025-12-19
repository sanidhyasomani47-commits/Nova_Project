import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import API from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                API.defaults.headers.common['x-auth-token'] = token;
                try {
                    const res = await API.get('/auth');
                    setUser(res.data);
                } catch (err) {
                    localStorage.removeItem('token');
                    delete API.defaults.headers.common['x-auth-token'];
                    setUser(null);
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    const login = async (username, password) => {
        try {
            const res = await API.post('/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            API.defaults.headers.common['x-auth-token'] = res.data.token;
            // Fetch user data
            const userRes = await API.get('/auth');
            setUser(userRes.data);
            return true;
        } catch (err) {
            console.error('Login error', err);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete API.defaults.headers.common['x-auth-token'];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

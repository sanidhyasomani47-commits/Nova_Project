import axios from 'axios';

// Use environment variable, or fallback to the known production backend URL + /api
// This ensures it works even if the VITE_API_URL is missing or set to just the domain
const envUrl = import.meta.env.VITE_API_URL;
const prodUrl = 'https://nova-project-1.onrender.com/api';
const localUrl = 'http://localhost:5000/api';

const baseURL = envUrl
    ? (envUrl.endsWith('/api') ? envUrl : `${envUrl}/api`)
    : (import.meta.env.MODE === 'production' ? prodUrl : localUrl);

const API = axios.create({ baseURL });

export default API;

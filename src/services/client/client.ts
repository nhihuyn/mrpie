import axios from 'axios';

export const SESSION_UUID_KEY = 'session_uuid';

export const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})
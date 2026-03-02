import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// In a real app, this should come from process.env (e.g., react-native-dotenv or Expo Config)
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor: attach token
apiClient.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Error fetching token from storage', error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor: handle global errors like 401 Unauthorized
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized errors (e.g., logout user, clear token, redirect to login)
            console.warn('Unauthorized request - redirecting to login');
            await AsyncStorage.removeItem('userToken');
            // Trigger global logout state or event here if necessary
        }
        return Promise.reject(error);
    }
);

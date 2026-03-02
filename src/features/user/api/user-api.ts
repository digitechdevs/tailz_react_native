import { apiClient } from '../../../core/api/api-client';
import { User } from '../validation/user-schema';

export const userApi = {
    getUsers: async (): Promise<User[]> => {
        const response = await apiClient.get('/users');
        return response.data;
    },
    getUserById: async (id: number): Promise<User> => {
        const response = await apiClient.get(`/users/${id}`);
        return response.data;
    },
    createUser: async (user: Omit<User, 'id'>): Promise<User> => {
        const response = await apiClient.post('/users', user);
        return response.data;
    },
};

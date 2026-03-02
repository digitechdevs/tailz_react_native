import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../api/user-api';
import { User } from '../validation/user-schema';

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: userApi.getUsers,
    });
};

export const useUser = (id: number) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () => userApi.getUserById(id),
        enabled: !!id,
    });
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userData: Omit<User, 'id'>) => userApi.createUser(userData),
        onSuccess: () => {
            // Invalidate and refetch users list after creating a new user
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};

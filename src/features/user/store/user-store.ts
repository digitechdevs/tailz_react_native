import { create } from 'zustand';
import { User } from '../validation/user-schema';

interface UserState {
    selectedUser: User | null;
    selectUser: (user: User) => void;
    clearSelection: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    selectedUser: null,
    selectUser: (user) => set({ selectedUser: user }),
    clearSelection: () => set({ selectedUser: null }),
}));

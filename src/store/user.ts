import { User } from '../types/userDatatype';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthUserStore = {
  authUser: User | null;
  token: string;
  setAuthUser: (authUser: User) => void;
  setToken: (token: string) => void;
  resetAuthUser: () => void;
};

export const useAuthUserStore = create<AuthUserStore>()(
  persist(
    (set) => ({
      authUser: null,
      token: '',
      setAuthUser: (authUser) => set({ authUser }),
      setToken: (token) => set({ token }),
      resetAuthUser: () => set({ authUser: null, token: '' }),
    }),
    {
      name: 'auth-user-storage',
    }
  )
);

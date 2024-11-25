import create from 'zustand';
import axios from 'axios';

interface AuthState {
  token: string | null;
  user: any | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  login: async (credentials) => {
    try {
      const { data } = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', data.token);
      set({ token: data.token, user: data.user });
    } catch (error) {
      throw new Error('Authentication failed');
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));
import { create } from 'zustand';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  listenAuth: () => {
    return onAuthStateChanged(auth, (firebaseUser) => {
      set({
        user: firebaseUser,
        loading: false,
      });
    });
  },

  logout: async () => {
    await signOut(auth);
    set({ 
      user: null,
      loading: false 
    });
  },
}));

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserLogin = create(
  persist(
    (set, get) => ({
      user: null,
      setUserLogin: (newUser) => set({ user: newUser }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useUserLogin;

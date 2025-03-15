import { create } from "zustand";

const useUserStore = create((set) => ({
  userLogin: [],
  setUserLogin: (newUsers) => set({ userLogin: newUsers }),
}));

export default useUserStore;

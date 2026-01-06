import { create } from "zustand";

export const useDateRangeStore = create((set) => ({
  from: new Date().toISOString().split('T')[0],
  to: new Date().toISOString().split('T')[0],

   setRange: (from, to) => set({ from, to }),
}));

import { create } from 'zustand';


export const useIconStore = create((set)=>({
    selectedIcon: {
        icon:null,
        categoryName: null
    },
    
    setSelectedIcon: (state)=>
        set({ selectedIcon: state})
    
})) 

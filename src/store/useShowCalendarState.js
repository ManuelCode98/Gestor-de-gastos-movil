import { create } from "zustand";


export const useShowCalendarState = create((set)=>({
    showCalendarState : false,

    setShowCalendarState: (state)=>
        set( () =>({
            showCalendarState: state
        }))
}))


import { create } from 'zustand';

export const useButtonsTransaction = create((set) => ({
  buttonsTransactionState: {
    expense: true,
    income: false,
  },

  setButtonsTransactionState: (state) =>
    set(() => ({
      buttonsTransactionState: state,
    })),
}));

export const useValueTransaction = create((set)=>({

  inputTransactionState: '',

  setInputTransactionState: (state)=>
    set(()=> ({
      inputTransactionState: state
    })) 

}))

export const useTotalExpenses = create((set)=>({

  totalExpensesState: 0,

  setTotalExpenseState: (state) => 
    set(()=>({
      totalExpensesState: state
    }))

}))
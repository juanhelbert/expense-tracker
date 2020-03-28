import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state
const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let initialState = localStorageTransactions ? localStorageTransactions : {
  transactions: [
    { id: 2, text: 'Salary', amount: 300 },
    { id: 1, text: 'Book', amount: -20 },
    { id: 3, text: 'T-shirt', amount: -10 },
  ]
};

// Create context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  // Updates localStorage
  localStorage.setItem('transactions', JSON.stringify(state));

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>
  )
}
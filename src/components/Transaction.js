import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const signColor = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <li className={signColor}>
      {transaction.text} <span>{transaction.amount}</span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" stroke="none" /></svg>
      </button>
    </li>
  )
}

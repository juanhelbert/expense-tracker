import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const sign = total < 0 ? 'minus' : 'plus'

  return (
    <div>
      <h4>Your balance</h4>
      <h1 className={sign}>{total}</h1>
    </div>
  )
}

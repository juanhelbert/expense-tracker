import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>New transaction</h3>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Title" />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount (negative for expenses)" />
        <button className="btn" type="submit" disabled={!text || !amount}>Add transaction</button>
      </form>
    </>
  )
}

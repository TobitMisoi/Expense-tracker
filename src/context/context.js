import React, { createContext, useReducer } from 'react'
import contextReducer from './ContextReducer'
import PropTypes from 'prop-types'

const initialState = JSON.parse(localStorage.getItem('transactions')) || []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)

  console.log(transactions)
  // Action Creators
  const deleteTransaction = (id) => {
    // dispatches something
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === 'Expense'
      ? acc - currVal.amount
      : acc + currVal.amount
  }, 0)

  return (
    <ExpenseTrackerContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        transactions,
        balance
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.element
}

export default Provider

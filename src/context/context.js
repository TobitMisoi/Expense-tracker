import React, { createContext, useReducer } from 'react'
import contextReducer from './ContextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState)

console.log(transactions);
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

    return (
        <ExpenseTrackerContext.Provider value={{
            addTransaction,
            deleteTransaction,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
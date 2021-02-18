import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: []
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider componnet - provides the state and action to the components that is wrapped in
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id // Any data we want to send to it, in this case - id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction 
        })
    }

    // In order to access the actions and states in other components, need to pass them via provider value
    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
        </GlobalContext.Provider>);
}
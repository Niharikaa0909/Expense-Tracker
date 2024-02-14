import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [
           { id: 1, text: 'Flower', amount: -20 },
           { id: 2, text: 'Salary', amount: 300 },
           { id: 3, text: 'Book', amount: -10 },
           { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//Provider component - other components to have access to global state. Basically wrap all the components in the provider
//we use dispatch whenevr we want to call reducer.
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    //we need to have a provider component...children is a prop. 
    //Provider will provide state and actions to the components that it is wrapped around.
    return(<GlobalContext.Provider value={{
        //state.transaction to access anything in the transacton object.
        //this way we can access transaction from any component that request for it using context hook. 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
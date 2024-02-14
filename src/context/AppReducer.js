
//this is a function which takes in state and action
export default (state, action) => {
    //actions like delete add and all to change the state.
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                //reducer is to change the state and send it down to the componenet
                //we have to create a new state and then send it down...we can't just change it
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
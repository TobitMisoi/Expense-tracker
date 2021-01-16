const contextReducer = (state, action) => {
    // assigning the transactions variable
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((tr) => tr.id !== action.payload);

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]

            localStorage.setItem('transactions', JSON.stringify(transactions));


            return transactions;
        default:
            // return the current state
            return state;
    }
}
export default contextReducer;
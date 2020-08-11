export default (state, action) => {
    switch (action.type) {
        case "remove-transaction":
            return {
                ...state,
                transactions: state.transactions = state.transactions.filter(item => item.id != action.id)
            };
    }
} 
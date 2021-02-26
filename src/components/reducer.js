import { setTheme } from "../theme"
export default (state, action) => {
    switch (action.type) {
        case "remove-transaction":
            return {
                ...state,
                transactions: state.transactions = state.transactions.filter((item, index) => item.id !== action.payload)
            };
        case "add": 
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case "update-name":
            const { _item } = action
            return {
                ...state, 
                transactions: [...state.transactions.filter(i => i.id !== _item.id),  {"id": _item.id, "name": action.payload, "amount": _item.amount}]
            }
        case "update-amount":
            const amount = isNaN(action.payload) ? 0 : action.payload;
            const { item } = action
            return {
                ...state, 
                transactions: [...state.transactions.filter(i => i.id !== item.id),  {"id": item.id, "name": item.name, "amount": amount}]
            }    
        case "switch-theme":
            setTheme(action.payload)
            return {
                ...state,
                theme: action.payload
            }
        default: 
            return state;
    }
} 
import DEFINE_ACTIONS from "../actions/defineActions"

const initialstate = []

const bookReducer = (state = initialstate, action) =>{
    switch(action.type)
    {
        case DEFINE_ACTIONS.ADD_BOOK:
            return [...state, action.payload]
        case DEFINE_ACTIONS.TOGGLE_READ:
            return state.map(book => book.id === action.payload ? {...book, read: !book.read} : book)
        case DEFINE_ACTIONS.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload)
        default:
            return state
    }
}

export default bookReducer
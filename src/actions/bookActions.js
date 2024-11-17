import DEFINE_ACTIONS from "./defineActions";

const addBook = (book) => ({
    type: DEFINE_ACTIONS.ADD_BOOK,
    payload: book
})

const toggleRead = (id) => ({
    type: DEFINE_ACTIONS.TOGGLE_READ,
    payload: id  
})

const removeBook = (id) => ({
    type: DEFINE_ACTIONS.REMOVE_BOOK,
    payload: id
})

export {
    addBook,
    toggleRead,
    removeBook
}
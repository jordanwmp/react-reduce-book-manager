import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleRead, removeBook } from '../../actions/bookActions'

import './BookItem.module.css'

const BookItem = ({ book }) => {
    const dispatch = useDispatch()

    return (
        <li>
            <span
                style={{
                    textDecoration: book.read ? 'line-through' : 'none'
                }}
                onClick={() => { dispatch(toggleRead(book.id)) }}
            >
                {book.title} by {book.author}
            </span>
            <button 
                onClick={()=> dispatch(removeBook(book.id))}
            >
                Delete
            </button>
        </li>
    )
}

export default BookItem
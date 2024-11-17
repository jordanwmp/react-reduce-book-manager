import React from 'react'
import { useSelector } from 'react-redux'
import BookItem from '../BookItem'

const BookList = () =>{
    const books = useSelector((state) => state)

    return (
        <ul>
            {books.length == 0 && <p>You don't have any book yet. Please, register your first book.</p>}
            {books.length > 0 && books.map((book)=> (<BookItem key={book.id} book={book}/>))}
        </ul>
    )
}

export default BookList
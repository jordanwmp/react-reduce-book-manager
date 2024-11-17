import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addBook} from '../../actions/bookActions'

import styles from './AddBook.module.css'

const AddBook = () =>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(title.trim() && author.trim())
        {   
            const book = {
                id: Date.now(),
                title,
                author,
                read: false 
            }
            dispatch(addBook(book))
            setTitle('')
            setAuthor('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for='title'>Title</label>
            <input 
                id='title'
                type='text'
                placeholder='Book title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label for='author'>Author</label>
            <input 
                id='author'
                type='text'
                placeholder='Author'
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
            />
            <button type='submit'>Add Book</button>
        </form>
    )

}

export default AddBook
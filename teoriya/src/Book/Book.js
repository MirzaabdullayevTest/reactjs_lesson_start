import React from 'react'
import classes from './Book.module.css'

const Book = (props) => {
    const inputCls = []

    if (props.title) {
        inputCls.push('green')
    }
    else {
        inputCls.push('red')
    }

    return (
        <div className={classes.Book}>
            <h2>Book name: {props.title}</h2>
            <p>Book year: <strong>{props.year}</strong></p>
            <p><strong>{Math.floor(Math.random() * 100)}</strong></p>
            <input type="text" onChange={props.onChangeName} value={props.title} className={inputCls.join(' ')} />
            <button onClick={props.onDeleteHandler}>Delete</button>
        </div>
    )

}

export default Book
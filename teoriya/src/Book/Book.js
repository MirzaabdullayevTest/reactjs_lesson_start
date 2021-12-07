import React from 'react'



const Book = (props) => {
    const bookStyle = {
        display: 'inline-block',
        padding: '10px',
        margin: '10px',
        border: '1px solid #ccc',
        boxShadow: '0 0 5px #eee',
        textAlign: 'center'
    }

    return (
        <div className="Book" style={bookStyle}>
            <h2>Book name: {props.title}</h2>
            <p>Book year: <strong>{props.year}</strong></p>
            <p><strong>{Math.floor(Math.random() * 100)}</strong></p>
            <button onClick={props.onChangeHandler}>Put title</button>
        </div>
    )


}

export default Book
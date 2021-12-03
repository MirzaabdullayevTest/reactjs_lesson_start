function Book(props) {


    let bookStyle = {
        padding: '10px',
        margin: '10px',
        boxShadow: '0 0 5px #ccc',
        border: '2px solid #eee',
        borderRadius: '20px',
        background: 'green',
        display: 'inline-block',
        textAlign: 'center'
    }
    const currentYear = 2021

    // function click() {
    //     const r = Math.floor(Math.random() * 256)
    //     const g = Math.floor(Math.random() * 256)
    //     const b = Math.floor(Math.random() * 256)
    //     let background = `rgb(${r}, ${g}, ${b})`
    // }

    return (
        <div className="Book" style={bookStyle}>
            <h1>{props.title}</h1>
            <span>Year: <strong>{props.year}</strong></span>
            <br />
            <span>Age: <strong>{currentYear - props.year}</strong></span>
            <button style={{ display: 'block', margin: 'auto' }} >Click</button>
        </div>
    );
}

export default Book;

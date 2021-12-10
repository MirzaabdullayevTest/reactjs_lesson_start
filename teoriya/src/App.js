// import './App.css';
import { Component } from 'react';
import Book from './Book/Book'

const appStyle = {
  width: '1200px',
  margin: 'auto',
  textAlign: 'center'
}

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [
        { title: 'Shaytanat', year: 1998 },
        { title: 'Rework', year: 2005 },
        { title: 'Rich dad and poor dad', year: 2008 },
      ],
      title: props.title,
      isNone: false
    }
  }



  changeTitleHandler = (title) => {
    console.log('clicked');
    this.setState({
      title: title
    })
  }

  inputHandler = (event) => {
    const val = event.target.value

    this.setState({
      title: val
    })
  }

  offHandler = () => {
    console.log('OFF clicked', !this.state.isNone);

    this.setState({
      isNone: !this.state.isNone
    })
  }

  onChangeName = (val, index) => {
    // console.log(val, index);
    // const books = this.state.books.concat()
    const books = [...this.state.books]
    books[index].title = val

    this.setState({
      books
    })

  }

  deleteHandler(index) {
    console.log('Deleted');
    const books = this.state.books.concat()
    books.splice(index, 1)
    this.setState({
      books
    })
  }


  render() {
    // const books = this.state.books  // massiv
    console.log('render');

    let books = null

    if (this.state.isNone) {
      books = this.state.books.map((book, index) => {
        return (
          <Book
            key={index}
            title={book.title}
            year={book.year}
            // onChangeHandler={this.changeTitleHandler.bind(this, book.title)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
            onDeleteHandler={this.deleteHandler.bind(this, index)}
          />
        )
      })
    }

    return (
      <div className="App" style={appStyle}>
        <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>

        <input type="text" onChange={this.inputHandler} />

        <button onClick={this.offHandler}>Click</button>

        <div className="box" style={boxStyle}>
          {books}
        </div>
      </div>
    )
  }
}

export default App;

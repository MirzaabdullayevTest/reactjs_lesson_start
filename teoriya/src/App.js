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
  justifyContent: 'center'
}




class App extends Component {
  state = {
    books: [
      { title: 'Shaytanat', year: 1998 },
      { title: 'Rework', year: 2005 },
      { title: 'Rich dad and poor dad', year: 2008 },
    ],
    title: 'Hello from state',
    isNone: false
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


  render() {
    // const books = this.state.books  // massiv

    console.log('render');

    return (
      <div className="App" style={appStyle}>
        <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>

        <input type="text" onChange={this.inputHandler} />

        {/* <button onClick={this.changeTitleHandler.bind(this, 'Clicked')}>Click</button> */}
        <button onClick={() => this.changeTitleHandler('Clicked function')}>Click</button>

        <div className="box" style={boxStyle}>
          {
            this.state.books.map((book, index) => {
              if (this.state.isNone) {
                return (
                  <Book
                    key={index}
                    title={book.title}
                    year={book.year}
                    onChangeHandler={this.changeTitleHandler.bind(this, book.title)}
                  />
                )
              }
            })
          }

          {/* <Book title={books[0].title} year={books[0].year} onChangeHandler={this.changeTitleHandler.bind(this, books[0].title)} />
          <Book title={books[1].title} year={books[1].year} onChangeHandler={this.changeTitleHandler.bind(this, books[1].title)} />
          <Book title={books[2].title} year={books[2].year} onChangeHandler={this.changeTitleHandler.bind(this, books[2].title)} /> */}
        </div>

        <button onClick={this.offHandler}>OFF</button>

      </div>
    )
  }
}

export default App;

// import './App.css';
import Book from './Book'

const appStyle = {
  width: '1200px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto'
}

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>The best books</h1>
      <hr />
      <div className="App" style={appStyle}>

        <Book title="Shaytanat" year="1998" />
        <Book title="Forrest Gump" year="2008" />
        <Book title="Million dollarlik xatolar" year="2018" />
      </div>
    </>
  );
}

export default App;

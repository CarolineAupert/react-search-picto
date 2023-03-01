import './App.css';
import SearchZone from './components/SearchZone';

function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <div className="app">
        <header>
          <strong>Picto-sketchnote</strong>
        </header>
        <div className='main'>
          <SearchZone />
        </div>
        <footer className='center'>
          <div>
            <span> &copy; 2023 Copyright : </span>
            <a href="https://caukaro.fr" target="_blank"> Caroline Aupert</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

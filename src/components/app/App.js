import './App.css';
import SearchZone from '../search/SearchZone';

// This is the main App Component.
function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <div className="app">
        <header data-testid="header">
          <strong>Picto-sketchnote</strong>
        </header>
        <div className='main' data-testid="content">
          <SearchZone />
        </div>
        <footer className='center' data-testid="footer">
          <div>
            <span> &copy; 2023 Copyright : </span>
            <a href="https://caukaro.fr" target="_blank" rel="noopener noreferrer"> Caroline Aupert</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

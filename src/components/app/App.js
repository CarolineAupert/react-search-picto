import './App.css';
import SearchZone from '../search/SearchZone';
import ResponsiveImage from '../utils/ResponsiveImage';

// This is the main App Component.
function App() {

  const titleImage = {
    url: process.env.REACT_APP_API_S3 + "/images/brand/Picto-sketchnote-titre.png",
    alt: "Picto-sketchnote",
    className : "title-img"
  };

  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <div className="app">
        <header data-testid="header">
          <ResponsiveImage image={titleImage}/>
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

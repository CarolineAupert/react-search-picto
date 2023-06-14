import { NavLink, Outlet } from 'react-router-dom';
import ResponsiveImage from '../utils/ResponsiveImage';
import './App.css';
import HamburgerNav from '../navigation/HamburgerNav';

// This is the main App Component.
function App() {

  const titleImage = {
    url: process.env.REACT_APP_API_S3 + "/images/brand/Picto-sketchnote-titre.png",
    alt: "Picto-sketchnote",
    className: "title-img"
  };

  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <div className="app">
        <header data-testid="header">
          <NavLink to="/">
            <ResponsiveImage image={titleImage} />
          </NavLink>
          <HamburgerNav></HamburgerNav>
        </header>

        <div className='flex-1' data-testid="content">
          <Outlet />
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

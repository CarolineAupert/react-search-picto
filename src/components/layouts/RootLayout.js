import Link from 'next/link';
import { React } from 'react';
import ResponsiveImage from '../utils/ResponsiveImage';
import HamburgerNav from '../navigation/HamburgerNav';

const titleImage = {
    url: process.env.NEXT_PUBLIC_REACT_APP_API_S3 + "/images/brand/Picto-sketchnote-titre.png",
    alt: "Picto-sketchnote",
    className: "title-img"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="fr">
            <body>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
                <div className="app">
                    <header data-testid="header">
                        <Link href="/">
                            <ResponsiveImage image={titleImage} />
                        </Link>
                        <HamburgerNav></HamburgerNav>
                    </header>

                    <div className='flex-1' data-testid="content">
                        {children}
                    </div>
                    <footer className='center' data-testid="footer">
                        <div>
                            <span> &copy; 2023 Copyright : </span>
                            <a href="https://caukaro.fr" target="_blank" rel="noopener noreferrer"> Caroline Aupert</a>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
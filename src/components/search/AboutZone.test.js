import { render, screen } from '@testing-library/react';
import { React } from 'react';
import { MemoryRouter } from 'react-router-dom';
import AboutZone from './AboutZone';
import { HelmetProvider } from 'react-helmet-async';

describe('AboutZone', () => {
    it("should display the about page", async () => {

        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={["/about"]}>
                    <AboutZone />
                </MemoryRouter >
            </HelmetProvider>
        );
        expect(screen.getByTestId("about-author")).toBeInTheDocument();
        expect(screen.getByTestId("about-faq")).toBeInTheDocument();
        expect(screen.getByTestId("about-title")).toBeInTheDocument();

    });



});
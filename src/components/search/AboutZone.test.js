import { render, screen } from '@testing-library/react';
import { React } from 'react';
import { MemoryRouter } from 'react-router-dom';
import AboutZone from './AboutZone';

describe('AboutZone', () => {
    it("should display the about page", async () => {

        render(
            <MemoryRouter initialEntries={["/about"]}>
                <AboutZone/>
            </MemoryRouter >
        );
        expect(screen.getByTestId("about-author")).toBeInTheDocument();
        expect(screen.getByTestId("about-faq")).toBeInTheDocument();
        expect(screen.getByTestId("about-title")).toBeInTheDocument();

    });



});
import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HamburgerNav from './HamburgerNav';
import { MemoryRouter, Route, Routes } from 'react-router-dom';


describe('HamburgerNav', () => {
    it("should render the HamburgerNav", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<HamburgerNav />}></Route>
                </Routes>
            </MemoryRouter >
        );

        // Check the hamburger
        const hamburger = screen.getByTestId("hamburger")
        expect(hamburger).toBeInTheDocument();

        // Check the nav links
        const homeNav = screen.getByTestId("nav-home")
        expect(homeNav).toBeInTheDocument();
        const aboutNav = screen.getByTestId("nav-about")
        expect(aboutNav).toBeInTheDocument();
        const nav = screen.getByTestId("nav")
        expect(nav).toBeInTheDocument();

        // Check classes
        expect(nav).toHaveClass("navigation");
        expect(nav).not.toHaveClass("mobile-nav");
    });

    it("should nav to the correct route", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<HamburgerNav />}></Route>
                    <Route path="/about" element={<div data-testid='result'>search results</div>}></Route>
                </Routes>
            </MemoryRouter >
        );

        const aboutNav = screen.getByTestId("nav-about")
        expect(aboutNav).toBeInTheDocument();

        // Clicks on the about nav link
        fireEvent.click(aboutNav);

        expect(screen.getByTestId("result")).toBeInTheDocument;

    });

});
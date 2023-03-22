import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import SearchZone from './SearchZone';

describe('SearchZone', () => {
    it("should display results", () => {
        render(
            <MemoryRouter initialEntries={["/search/loupe"]}>
                <Routes>
                    <Route path="/" element={<SearchZone />}>
                        <Route path="/search/:searchValue" element={<div data-testid='result'>search results</div>}></Route>
                    </Route>
                </Routes>
            </MemoryRouter >
        );

        expect(screen.getByTestId("result")).toBeInTheDocument;
    });

    it("should format search value", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<SearchZone />}>
                        <Route path="/search/:searchValue" element={<div data-testid='result'>search results</div>}></Route>
                    </Route>
                </Routes>
            </MemoryRouter >
        );

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: " picto TesT " } })

        const searchButton = screen.getByTestId("search-button");
        fireEvent.click(searchButton);

        expect(screen.getByTestId("result")).toBeInTheDocument;
    });

    it("should not trigger the search because of empty value", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<SearchZone />}>
                        <Route path="/search/:searchValue" element={<div data-testid='result'>search results</div>}></Route>
                    </Route>
                </Routes>
            </MemoryRouter >
        );

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: "   " } })

        const searchButton = screen.getByTestId("search-button");
        fireEvent.click(searchButton);

        expect(screen.queryByTestId("result")).toBeNull;
    });
});
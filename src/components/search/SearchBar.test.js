import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

//Mock props
const handleSearchPicto = jest.fn();

describe('SearchBar', () => {
    it("should display initial content", () => {
        render(
            <SearchBar onSearchPicto={handleSearchPicto} />
        );

        const searchInput = screen.getByTestId("search-input");
        expect(searchInput).toBeInTheDocument;
        expect(searchInput).toHaveValue("");

        const clearButton = screen.queryByTestId("clear-button");
        expect(clearButton).toBeNull;


        const searchButton = screen.getByTestId("search-button");
        expect(searchButton).toBeInTheDocument;

    });

    it("should display clear button on type", () => {
        render(
            <SearchBar onSearchPicto={handleSearchPicto} />
        );

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: " picto TesT " } })

        const clearButton = screen.queryByTestId("clear-button");
        expect(clearButton).toBeInTheDocument;
    });


    it("should remove clear button", () => {
        render(
            <SearchBar onSearchPicto={handleSearchPicto} />
        );

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: " picto TesT " } })

        const clearButton = screen.queryByTestId("clear-button");
        expect(clearButton).toBeInTheDocument;

        fireEvent.input(searchInput, { target: { value: "" } })
        expect(clearButton).toNull;
    });

    it("should reset search value", () => {
        render(
            <SearchBar onSearchPicto={handleSearchPicto} />
        );

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: "perso" } })

        const clearButton = screen.queryByTestId("clear-button");
        fireEvent.click(clearButton);

        expect(searchInput).toHaveValue("");
    });

    it("should launch the search on click", () => {
        render(
            <SearchBar onSearchPicto={handleSearchPicto} />
        );
        const searchValue = "perso";

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: searchValue } })

        const searchButton = screen.queryByTestId("search-button");
        fireEvent.click(searchButton);

        expect(searchInput).toHaveValue(searchValue);
        expect(handleSearchPicto).toHaveBeenCalledTimes(1);
        expect(handleSearchPicto).toBeCalledWith(searchValue);
    });

    it("should launch the search on 'Enter'", () => {
        render(
            <SearchBar onSearchPicto={handleSearchPicto} />
        );

        const searchValue = "truc";

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: searchValue } })
        fireEvent.submit(searchInput);

        expect(searchInput).toHaveValue(searchValue);
        expect(handleSearchPicto).toHaveBeenCalledTimes(1);
        expect(handleSearchPicto).toBeCalledWith(searchValue);
    });

    it("should launch nothing on 'Esc'", () => {
        render(
            <SearchBar onSearchPicto={handleSearchPicto} />
        );

        const searchValue = "truc";

        const searchInput = screen.getByTestId("search-input");
        fireEvent.input(searchInput, { target: { value: searchValue } })
        fireEvent.keyDown(searchInput, { key: "Escape" });

        expect(searchInput).toHaveValue(searchValue);
        expect(handleSearchPicto).toHaveBeenCalledTimes(0);
    });

});
import { React } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SearchResults from './SearchResults';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PictoApi } from '../../api/services/PictoApi';

// Mock Picto
const pictos = [
    {
        pictoId: 1,
        location: "parchemin.jpg",
        creationDate: "04/06/2022",
        title: "Parchemin",
        tags: ["parchemin", "détails", "loi"]
    },
    {
        pictoId: 2,
        location: "loupe.jpg",
        creationDate: "04/07/2022",
        title: "loupe",
        tags: ["loupe", "chercher", "grossir"]
    },
    {
        pictoId: 3,
        location: "perso.jpg",
        creationDate: "04/08/2022",
        title: "perso",
        tags: ["perso", "humain", "emotion"]
    },
    {
        pictoId: 4,
        location: "soleil.jpg",
        creationDate: "04/09/2022",
        title: "soleil",
        tags: ["lumiere", "soleil"]
    }
]

describe('SearchResults', () => {
    it("should display results", async () => {

        const apiMock = jest.spyOn(PictoApi, 'indexByTag');
        apiMock.mockResolvedValue({ data: pictos });

        render(
            <MemoryRouter initialEntries={["/search/perso"]}>
                <Routes>
                    <Route path="/search/:searchValue" element={<SearchResults />}> </Route>
                </Routes>
            </MemoryRouter >
        );

        await waitFor(() => expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("Pictos trouvés pour le terme : perso"));

    });

    it("should display no results (empty)", async () => {

        const apiMock = jest.spyOn(PictoApi, 'indexByTag');
        apiMock.mockResolvedValue({ data: [] });

        render(
            <MemoryRouter initialEntries={["/search/perso"]}>
                <Routes>
                    <Route path="/search/:searchValue" element={<SearchResults />}> </Route>
                </Routes>
            </MemoryRouter >
        );

        await waitFor(() => expect(screen.getByTestId('results-no-picto')).toHaveTextContent("Nous n'avons trouvé aucun picto pour le terme : perso"));

    });

    it("should display no results (null)", async () => {

        const apiMock = jest.spyOn(PictoApi, 'indexByTag');
        apiMock.mockResolvedValue({ data: null });

        render(
            <MemoryRouter initialEntries={["/search/perso"]}>
                <Routes>
                    <Route path="/search/:searchValue" element={<SearchResults />}> </Route>
                </Routes>
            </MemoryRouter >
        );

        await waitFor(() => expect(screen.getByTestId('results-no-picto')).toHaveTextContent("Nous n'avons trouvé aucun picto pour le terme : perso"));

    });

    it("should display loading", async () => {

        const apiMock = jest.spyOn(PictoApi, 'indexByTag');
        apiMock.mockResolvedValue({ data: null });

        render(
            <MemoryRouter initialEntries={["/search/perso"]}>
                <Routes>
                    <Route path="/search/:searchValue" element={<SearchResults />}> </Route>
                </Routes>
            </MemoryRouter >
        );

        expect(screen.getByTestId('results-loading')).toBeInTheDocument;

    });

    it("should display error", async () => {

        const apiMock = jest.spyOn(PictoApi, 'indexByTag');
        apiMock.mockRejectedValue(() => Promise.reject('API error'))


        render(
            <MemoryRouter initialEntries={["/search/perso"]}>
                <Routes>
                    <Route path="/search/:searchValue" element={<SearchResults />}> </Route>
                </Routes>
            </MemoryRouter >
        );

        await waitFor(() => expect(screen.getByTestId('results-error'))).toBeInTheDocument;

    });

});
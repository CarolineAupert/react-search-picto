import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PictoGrid from './PictoGrid';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

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
        creationDate: "04/06/2022",
        title: "loupe",
        tags: ["loupe", "chercher", "grossir"]
    }
]

describe('PictoGrid', () => {
    it("should render the pictos", () => {
        render(<PictoGrid pictos={pictos} />, { wrapper: BrowserRouter });
        expect(screen.getAllByRole("button")).toHaveLength(pictos.length);
    });

    it("should render no pictos", () => {
        render(<PictoGrid />, { wrapper: BrowserRouter });
        expect(screen.queryByRole("button")).toBeNull;
    });

    it("should open the modal when a picto is clicked", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <PictoGrid pictos={pictos} />
                <Routes>
                    <Route path="picto/1" element={<div data-testid="picto1"></div>} />
                    <Route path="picto/2" element={<div data-testid="picto2"></div>} />
                </Routes>
            </MemoryRouter >
        );

        const loupePicto = screen.getAllByRole("button")[1];
        fireEvent.click(loupePicto);
        expect(screen.getByTestId("picto2")).toBeInTheDocument;
        expect(screen.queryByTestId("picto1")).toBeNull;

    });

});
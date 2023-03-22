import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import PictoDetailModal from './PictoDetailModal';


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

describe('PictoDetailModal', () => {
    it("should close because there is no existing picto with id 20", () => {
        render(
            <MemoryRouter initialEntries={["/picto/20"]}>
                <Routes>
                    <Route path="/picto/:pictoId" element={<Outlet context={[pictos]} />}>
                        <Route index element={<PictoDetailModal />}></Route>
                    </Route>
                    <Route path="/" element={<div data-testid="close"></div>}></Route>
                </Routes>
            </MemoryRouter >
        );

        expect(screen.getByTestId("close")).toBeInTheDocument;

    });

    it("should close because button was clicked", () => {
        render(
            <MemoryRouter initialEntries={["/picto/2"]}>
                <Routes>
                    <Route path="/picto/:pictoId" element={<Outlet context={[pictos]} />}>
                        <Route index element={<PictoDetailModal />}></Route>
                    </Route>
                    <Route path="/" element={<div data-testid="close"></div>}></Route>
                </Routes>
            </MemoryRouter >
        );

        const closeButton = screen.getByTestId('close-modal')
        fireEvent.click(closeButton);
        expect(screen.getByTestId("close")).toBeInTheDocument;
    });

    it("should go to the next picto", () => {
        render(
            <MemoryRouter initialEntries={["/picto/2"]}>
                <Routes>
                    <Route path="/picto/:pictoId" element={<Outlet context={[pictos]} />}>
                        <Route index element={<PictoDetailModal />}></Route>
                    </Route>
                </Routes>
            </MemoryRouter >
        );

        //Click next button
        const nextButton = screen.getByTestId('next-modal')
        fireEvent.click(nextButton);

        // Check the image infos
        const pictoImage = screen.getByRole('img');
        expect(pictoImage.alt).toBe(pictos[2].title);

    });

    it("should go to the next picto which is the first", () => {
        render(
            <MemoryRouter initialEntries={["/picto/4"]}>
                <Routes>
                    <Route path="/picto/:pictoId" element={<Outlet context={[pictos]} />}>
                        <Route index element={<PictoDetailModal />}></Route>
                    </Route>
                </Routes>
            </MemoryRouter >
        );

        //Click next button
        const nextButton = screen.getByTestId('next-modal')
        fireEvent.click(nextButton);

        // Check the image infos
        const pictoImage = screen.getByRole('img');
        expect(pictoImage.alt).toBe(pictos[0].title);

    });


    it("should go to the previous picto", () => {
        render(
            <MemoryRouter initialEntries={["/picto/3"]}>
                <Routes>
                    <Route path="/picto/:pictoId" element={<Outlet context={[pictos]} />}>
                        <Route index element={<PictoDetailModal />}></Route>
                    </Route>
                </Routes>
            </MemoryRouter >
        );

        //Click next button
        const prevButton = screen.getByTestId('prev-modal')
        fireEvent.click(prevButton);

        // Check the image infos
        const pictoImage = screen.getByRole('img');
        expect(pictoImage.alt).toBe(pictos[1].title);

    });

    it("should go to the previous picto which is the last", () => {
        render(
            <MemoryRouter initialEntries={["/picto/1"]}>
                <Routes>
                    <Route path="/picto/:pictoId" element={<Outlet context={[pictos]} />}>
                        <Route index element={<PictoDetailModal />}></Route>
                    </Route>
                </Routes>
            </MemoryRouter >
        );

        //Click next button
        const prevButton = screen.getByTestId('prev-modal')
        fireEvent.click(prevButton);

        // Check the image infos
        const pictoImage = screen.getByRole('img');
        expect(pictoImage.alt).toBe(pictos[3].title);

    });

});
import { React } from 'react';
import { render, screen } from '@testing-library/react';
import PictoDetail from './PictoDetail';

// Mock Picto
const picto = {
    pictoId: 1,
    location: "parchemin.jpg",
    creationDate: "04/06/2022",
    title: "Parchemin",
    tags: ["parchemin", "détails", "loi"]
}

describe('PictoDetail', () => {
    it("should render the picto", () => {
        render(<PictoDetail picto={picto} />);

        // Check the image infos
        const pictoImage = screen.getByRole('img');
        expect(pictoImage.alt).toBe(picto.title);
        expect(pictoImage.src).toContain(picto.location);

        // Check the tags arre correctely displayed
        const parcheminTag = screen.queryByText("parchemin")
        expect(parcheminTag).toBeInTheDocument();
        const detailsTag = screen.queryByText(", détails")
        expect(detailsTag).toBeInTheDocument();
        const loiTag = screen.queryByText(", loi")
        expect(loiTag).toBeInTheDocument();

        // Check the date
        const dateLabel = screen.queryByText("Créé le 04/06/2022")
        expect(dateLabel).toBeInTheDocument();

    });

    it("should render nothing", () => {
        render(<PictoDetail />);

        // Check the date
        const dateLabel = screen.queryByText("Créé")
        expect(dateLabel).toBeNull;

    });
});
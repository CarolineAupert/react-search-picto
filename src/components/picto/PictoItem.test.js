import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PictoItem from './PictoItem';

// Mock Picto
const picto = {
    location: 'image.jpg',
    title: 'Description of the image'
}

// Mock openModal function
const openPictoModal = jest.fn();

describe('PictoItem', () => {
    it("should render the picto image", () => {
        render(<PictoItem picto={picto} />);

        // Check the image infos
        const pictoImage = screen.getByRole('img');
        expect(pictoImage.alt).toBe(picto.title);
        expect(pictoImage.src).toContain(picto.location);
    });

    it("should react when clicked", () => {
        render(<PictoItem picto={picto} openPictoDetailModal={openPictoModal} />);

        // Clicks the button
        const pictoItem = screen.getByRole('button');
        fireEvent.click(pictoItem);

        expect(openPictoModal).toHaveBeenCalledTimes(1);

    });
});
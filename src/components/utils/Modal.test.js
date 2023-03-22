import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';


// Mock openModal function
const handleCloseModal = jest.fn();
const handlePrevItem = jest.fn();
const handleNextItem = jest.fn();

describe('Modal', () => {
    it("should render the modal with its content", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <div data-testid="modal-content"></div>
            </Modal>
        );

        // Check content
        expect(screen.getByTestId("modal-content")).toBeInTheDocument;

        // Check modal elements
        expect(screen.getByTestId('close-modal')).toBeInTheDocument;
        expect(screen.getByTestId('next-modal')).toBeInTheDocument;
        expect(screen.getByTestId('prev-modal')).toBeInTheDocument;

    });

    it("should close the modal when close button clicked", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <div data-testid="modal-content"></div>
            </Modal>
        );

        // Clicks the close button
        const closeButton = screen.getByTestId('close-modal')
        fireEvent.click(closeButton);

        expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });

    it("should got to next when next button clicked", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <h1> Modal Content </h1>
            </Modal>
        );

        // Clicks the close button
        const nextButton = screen.getByTestId('next-modal')
        fireEvent.click(nextButton);

        expect(handleNextItem).toHaveBeenCalledTimes(1);
    });

    it("should got to previous when prev button clicked", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <h1> Modal Content </h1>
            </Modal>
        );

        // Clicks the close button
        const prevButton = screen.getByTestId('prev-modal')
        fireEvent.click(prevButton);

        expect(handlePrevItem).toHaveBeenCalledTimes(1);
    });

    it("should close the modal on 'esc' key", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <h1> Modal Content </h1>
            </Modal>
        );

        fireEvent.keyDown(document.body, { key: "Escape" });

        expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });

    it("should got to next the modal on 'Right' key", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <h1> Modal Content </h1>
            </Modal>
        );

        fireEvent.keyDown(document.body, { key: "Right" });
        fireEvent.keyDown(document.body, { key: "ArrowRight" });

        expect(handleNextItem).toHaveBeenCalledTimes(2);
    });

    it("should got to previous the modal on 'Left' key", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <h1> Modal Content </h1>
            </Modal>
        );

        fireEvent.keyDown(document.body, { key: "Left" });
        fireEvent.keyDown(document.body, { key: "ArrowLeft" });

        expect(handlePrevItem).toHaveBeenCalledTimes(2);
    });

    it("should do nothing on another key", () => {
        render(
            <Modal handleCloseModal={handleCloseModal} handlePrevItem={handlePrevItem} handleNextItem={handleNextItem}>
                <h1> Modal Content </h1>
            </Modal>
        );

        fireEvent.keyDown(document.body, { key: "Enter" });

        expect(handlePrevItem).toHaveBeenCalledTimes(0);
    });
});
import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Hamburger from './Hamburger';

//Mock props
const toggleHamburger = jest.fn();

describe('Hamburger', () => {
    it("should render the hamburger closed", () => {
        render(<Hamburger toggleHamburger={toggleHamburger} isOpen={false}/>);

        // Check the hamburger elements
        const hamburger = screen.getByTestId("hamburger")
        expect(hamburger).toBeInTheDocument();
        const burger1 = screen.getByTestId("burger1")
        expect(burger1).toBeInTheDocument();
        const burger2 = screen.getByTestId("burger2")
        expect(burger2).toBeInTheDocument();
        const burger3 = screen.getByTestId("burger3")
        expect(burger3).toBeInTheDocument();

        // Check the class names
        expect(burger1).toHaveClass("burger");
        expect(burger1).not.toHaveClass("burger1");
        expect(burger2).toHaveClass("burger");
        expect(burger2).not.toHaveClass("burger2");
        expect(burger3).toHaveClass("burger");
        expect(burger3).not.toHaveClass("burger3");
    });

    it("should render the hamburger opened", () => {
        render(<Hamburger toggleHamburger={toggleHamburger} isOpen={true}/>);

        // Check the hamburger elements
        const hamburger = screen.getByTestId("hamburger")
        expect(hamburger).toBeInTheDocument();
        const burger1 = screen.getByTestId("burger1")
        expect(burger1).toBeInTheDocument();
        const burger2 = screen.getByTestId("burger2")
        expect(burger2).toBeInTheDocument();
        const burger3 = screen.getByTestId("burger3")
        expect(burger3).toBeInTheDocument();

        // Check the class names
        expect(burger1).toHaveClass("burger");
        expect(burger1).toHaveClass("burger1");
        expect(burger2).toHaveClass("burger");
        expect(burger2).toHaveClass("burger2");
        expect(burger3).toHaveClass("burger");
        expect(burger3).toHaveClass("burger3");
    });

    it("should render toggle the Hamburger on click", () => {
        render(<Hamburger toggleHamburger={toggleHamburger} isOpen={true}/>);


        // Clicks on the hamburger
        const hamburger = screen.getByTestId("hamburger")
        fireEvent.click(hamburger);

        // Expect the function toggleHamburger to ba called
        expect(toggleHamburger).toHaveBeenCalledTimes(1);
    });
});
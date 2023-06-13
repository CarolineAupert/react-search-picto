import { React } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ResponsiveImage from './ResponsiveImage';


// Initial data
const testImage = {
    url: "http://host/monimage.png/",
    alt: "La description de mon image",
    className : "class-img"
  };

describe('ResponsiveImage', () => {
    it("should render the responsive image", () => {
        render(
            <ResponsiveImage image={testImage}/>
        );

        // Check picture
        const picture = screen.getByTestId("picture");
        expect(picture).toBeInTheDocument;
        expect(picture.className).toContain(testImage.className);

        // Check image infos
        const image = screen.getByRole('img');
        expect(image.alt).toBe(testImage.alt);
        expect(image.src).toContain(testImage.url);
        
        

    });

});
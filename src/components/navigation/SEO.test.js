import { render } from '@testing-library/react';
import { React } from 'react';
import SEO from './SEO';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

HelmetProvider.canUseDOM = false;
const context = {};

describe('SEO', () => {
    it("should render the seo tags", () => {
        render(
            <HelmetProvider context={context}>
                <MemoryRouter initialEntries={["/"]}>
                    <SEO
                        title="Picto-sketchnote - En savoir plus sur le projet"
                        description="Découvrez qui est à l'origine du projet, comment utiliser les pictogrammes qui vous plaisent et bien plus encore !"
                        type="webapp"
                        name="Caroline Aupert"
                    />
                </MemoryRouter >
            </HelmetProvider>
        );

        console.log(context.helmet.meta);
        expect(context.helmet.title.toString()).toContain('Picto-sketchnote - En savoir plus sur le projet');
    });


});
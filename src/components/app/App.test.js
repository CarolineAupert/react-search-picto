import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';


describe('App', () => {

  it("should render the app", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter >
      </HelmetProvider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

});

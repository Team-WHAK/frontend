import React from 'react';
import { queryByRole, render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs';
import { BrowserRouter } from 'react-router-dom';

describe('<AboutUs />', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
  })

  it('renders bio section with names and paragraphs', () => {

    // Check if names are rendered
    const nameKyle = screen.getByText('Kyle');
    const nameAubrey = screen.getByText('Aubrey');
    const nameWill = screen.getByText('Will');
    const nameHalie = screen.getByText('Halie');

    expect(nameKyle).toBeInTheDocument();
    expect(nameAubrey).toBeInTheDocument();
    expect(nameWill).toBeInTheDocument();
    expect(nameHalie).toBeInTheDocument();

  });

  it('has bio images and attributes assigned to it', () => {
    const imgKyle = screen.getByAltText(/bio image of kyle/i);
    const imgAubrey = screen.getByAltText(/bio image of aubrey/i);
    const imgWill = screen.getByAltText(/bio image of will/i);
    const imgHalie = screen.getByAltText(/bio image of halie/i);

    expect(imgKyle).toHaveAttribute("alt", "bio image of kyle");
    expect(imgAubrey).toHaveAttribute("alt", "bio image of aubrey");
    expect(imgWill).toHaveAttribute("alt", "bio image of will");
    expect(imgHalie).toHaveAttribute("alt", "bio image of halie");
  })


});

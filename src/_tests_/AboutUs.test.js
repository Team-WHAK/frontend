import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs';

describe('<AboutUs />', () => {
  it('renders bio section with names and paragraphs', () => {
    render(<AboutUs />);
    
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
});

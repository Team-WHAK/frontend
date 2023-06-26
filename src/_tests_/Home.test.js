import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe("<Home />", () => {
  it("renders welcome message and card titles", () => {
    const currentUser = 'John Doe';
    render(<Home currentUser={currentUser} />)
    const welcomeMessage = screen.getByText(`Welcome ${currentUser}`);
    expect(welcomeMessage).toBeInTheDocument();
  });
});

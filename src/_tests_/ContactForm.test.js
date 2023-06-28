import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../pages/ContactForm';


describe('ContactForm', () => {
  it('should prevent form submission', () => {
    render(<ContactForm />);

    const submitButton = screen.getByText('Submit');
    const handleSubmit = jest.fn();

    fireEvent.submit(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();

    screen.debug();
  });
  
});

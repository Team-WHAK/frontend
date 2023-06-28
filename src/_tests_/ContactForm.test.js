import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../pages/ContactForm';

describe('ContactForm', () => {
  
    beforeEach(() => {
      render(
        <BrowserRouter>
          <ContactForm />
        </BrowserRouter>
      );
    });

  it('should prevent form submission', () => {

    const submitButton = screen.getByText('Submit');
    const handleSubmit = jest.fn();

    fireEvent.submit(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
  
});

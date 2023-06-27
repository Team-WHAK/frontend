import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';

describe('SignUp', () => {
  
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
  }); 

  it('should render the signup form with email input', () => {
    const emailInput = screen.getByLabelText('Email:')
    expect(emailInput).toBeInTheDocument()
  })

  it('should render the signup form with password input', () => {
    const passwordInput = screen.getByLabelText('Password:')
    expect(passwordInput).toBeInTheDocument()
  })  

  it('should render the signup form with confirm password input', () => {
    const confirmPasswordInput = screen.getByLabelText('Confirm Password:')
    expect(confirmPasswordInput).toBeInTheDocument()
  }) 

  it('should render the signup form with submit button', () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' })
    expect(submitButton).toBeInTheDocument()
  }) 
}) 
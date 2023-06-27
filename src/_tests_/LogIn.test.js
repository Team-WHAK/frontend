import React from 'react';
import { render, screen, } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LogIn from '../pages/LogIn';

describe('LogIn', () => {
  
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    );
  }); 

  it('should render the login form with email input', () => {
    const emailInput = screen.getByLabelText('Email:')
    expect(emailInput).toBeInTheDocument()
  })

  it('should render the login form with password input', () => {
    const passwordInput = screen.getByLabelText('Password:')
    expect(passwordInput).toBeInTheDocument()
  })

  it('should render the login form with log in button', () => {
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })
}) 
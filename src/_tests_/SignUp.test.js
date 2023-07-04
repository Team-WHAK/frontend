import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, useNavigate } from 'react-router-dom';
import SignUp from '../pages/SignUp';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

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

describe("SignUp functionality", () => {

  it("should prevent form submission", () => {
    const tempSignup = jest.fn();
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <SignUp signup={tempSignup} />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "test6@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: "password" },
    });
    fireEvent.change(getByPlaceholderText("Confirm Password"), {
      target: { value: "password" },
    });

    fireEvent.click(getByText("Submit"));

    expect(tempSignup).toHaveBeenCalledWith({
      user: {
        email: "test6@example.com",
        password: "password",
      },
    });

    expect(navigate).toHaveBeenCalledWith("/home");
  });
})
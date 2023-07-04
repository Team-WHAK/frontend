import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LogInFail from "../pages/LogInFail";

describe("LogInFail", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LogInFail />
      </BrowserRouter>
    );
  });

  it("should render the login form with email input", () => {
    const emailInput = screen.getByLabelText("Email:");
    expect(emailInput).toBeInTheDocument();
  });

  it("should render the login form with password input", () => {
    const passwordInput = screen.getByLabelText("Password:");
    expect(passwordInput).toBeInTheDocument();
  });

  it("should render the login form with log in button", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("has a failed login header", () => {
    const logInHeader = screen.getByText(
      "Invalid username or password. Please try again"
    );
    expect(logInHeader).toBeInTheDocument();
  });
});

describe("LogInFail", () => {
  it("calls the handleSubmit function", () => {
    const mockLogin = jest.fn();
    render(<LogInFail login={mockLogin} />);

    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "password" },
    });

    fireEvent.click(screen.getByText("Login"));

    expect(mockLogin).toHaveBeenCalledWith({
      user: { email: "test@example.com", password: "password" },
    });
  });
});

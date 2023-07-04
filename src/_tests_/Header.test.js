import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("has an image and attributes assigned to it", () => {
    const imgAlt = screen.getByAltText(/Logo/i);
    expect(imgAlt).toHaveAttribute("alt", "Logo");
  })

  it("has an about us link", () => {
    const aboutUsLink = screen.getByText("About Us")
    expect(aboutUsLink).toBeInTheDocument()
  })

  it("has a contact link", () => {
    const contactLink = screen.getByText("Contact")
    expect(contactLink).toBeInTheDocument()
  })
})

describe("<Header /> conditional rendering", () => {

  it("renders home link for authenticated users", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Header currentUser={true} />} />
        </Routes>
      </MemoryRouter>
    )
    const homeLink = screen.getByText("Home")
    expect(homeLink).toBeInTheDocument()
  })

  it("renders logout link for authenticated users", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Header currentUser={true} />} />
        </Routes>
      </MemoryRouter>
    );
    const logOutLink = screen.getByText("Log Out");
    expect(logOutLink).toBeInTheDocument();
  });

  it("renders sign up link for unauthenticated users", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Header currentUser={false} />} />
        </Routes>
      </MemoryRouter>
    );
    const signUpLink = screen.getByText("Sign Up");
    expect(signUpLink).toBeInTheDocument();
  });

  it("renders login link for unauthenticated users", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Header currentUser={false} />} />
        </Routes>
      </MemoryRouter>
    );
    const logInLink = screen.getByText("Log In");
    expect(logInLink).toBeInTheDocument();
  });

})
import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders the correct text", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const textElement = screen.getByText(/© Whak inc. 2023. All rights reserved./i);
    expect(textElement).toBeInTheDocument();
  });
})

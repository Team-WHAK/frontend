import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  it("has an image and attributes assigned to it", () => {
      render(
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      )
      const imgAlt = screen.getByAltText(/Logo/i);
      expect(imgAlt).toHaveAttribute("alt", "Logo");
    })
  });


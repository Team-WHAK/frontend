import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";

describe("<Landing />", () => {
  it("has an image and attributes assigned to it", () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
    const imgAlt = screen.getByAltText(/house/i);
    expect(imgAlt).toHaveAttribute("alt", "house");
  })
})

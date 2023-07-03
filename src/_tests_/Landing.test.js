import { getByAltText, getByRole, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";

describe("<Landing />", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () =>{})

  it("has title Home", () => {
    const heading = screen.getByRole('heading', {
      name: /honey home/i
    })
  })

  it("has title tracker", () => {
    const heading = screen.getByRole("heading", {
      name: /tracker/i,
    });
  });
})

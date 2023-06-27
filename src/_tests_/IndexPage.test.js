import { Panel } from "rsuite";
import IndexPage from "../pages/IndexPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


describe("<IndexPage />", () => {
  beforeEach(()=> {
        render (
      <BrowserRouter>
      <IndexPage />
      </BrowserRouter>
    )
  })
  it("renders Clean Filter link and is clickable", () => {
    const card = screen.getByRole("link", {name: /Clean Filter/i});
    expect(card).toBeInTheDocument()
  });
  it("renders Kitchen - Dishwasher link and is clickable", () => {
    const card1 = screen.getByRole("link", {name: /Kitchen - Dishwasher/i});
    expect(card1).toBeInTheDocument()
  });
  it("renders Clean Tub link and is clickable", () => {
    const card2 = screen.getByRole("link", {name: /Clean Tub/i});
    expect(card2).toBeInTheDocument()
  });
  it("renders Laundry Room - Washer link and is clickable", () => {
    const card3 = screen.getByRole("link", {name: /Laundry Room - Washer/i});
    expect(card3).toBeInTheDocument()
  });
  it("renders Chimney Sweep link and is clickable", () => {
    const card4 = screen.getByRole("link", {name: /Chimney Sweep/i});
    expect(card4).toBeInTheDocument()
  });
  it("renders Living Room - Fireplace link and is clickable", () => {
    const card5 = screen.getByRole("link", {name: /Living Room - Fireplace/i});
    expect(card5).toBeInTheDocument()
  });
  it("renders Degrime and Deoderize link and is clickable", () => {
    const card6 = screen.getByRole("link", {name: /Degrime and Deodorize/i});
    expect(card6).toBeInTheDocument()
  });
  it("renders Kitchen - Garbage Disposal link and is clickable", () => {
    const card7 = screen.getByRole("link", {name: /Kitchen - Garbage Disposal/i});
    expect(card7).toBeInTheDocument()
  });
  it("renders an Add Task button and is clickable", () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument()
  });
  it("renders a Delete Task and is clickable", () => {
    const deleteTask = screen.getByRole('button');
    expect(deleteTask).toBeInTheDocument()
  });
})
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NotFound from "../pages/NotFound";

describe("<NotFound />", () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
  })

  it("renders the page without crashing", () => {})

  it("has error message", () => {
    const heading = screen.getByRole("heading", {
      name: /Honey, you've stumbled onto a page that does not exist. But don't buzz off just yet! Come back to the hive, and join the colony./i,
    });
  });

  it("has return to hive button", () => {
    const button = screen.getByRole("button", {
      name: /Return to the Hive/i,
    });

    expect(button).toBeInTheDocument()
  }); 

});

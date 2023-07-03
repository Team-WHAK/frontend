import IndexPage from "../pages/IndexPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import mockTasks from "../mockTasks";
import mockUsers from "../mockUsers";

describe("<IndexPage />", () => {

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/indexpage"]}>
        <Routes>
          <Route
            path="/indexpage"
            element={
              <IndexPage
                tasks={mockTasks}
                currentUser={mockUsers[0]}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )
  });

  it("renders Clean Filter link and is clickable", () => {
    const card = screen.getByRole("link", {name: /Clean Filter/i});
    expect(card).toBeInTheDocument()
  });

  it("renders Kitchen - Dishwasher link and is clickable", () => {
    const card1 = screen.getByRole("link", {name: /Kitchen - Dishwasher/i});
    expect(card1).toBeInTheDocument()
  });

  it("renders an Add Task button and is clickable", () => {
    const button = screen.getByRole('button', {name: /add task/i});
    expect(button).toBeInTheDocument()
  });

  it("renders a Delete Button and is clickable", () => {
    const delTask = screen.getAllByRole('button', {name: /delete/i});
    expect(delTask.length).toEqual(1)
  });

  it("renders a Edit Button and is clickable", () => {
    const delTask = screen.getAllByRole("button", { name: /edit/i });
    expect(delTask.length).toEqual(1);
  });
})
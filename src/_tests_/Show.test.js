import {render, screen, waitFor} from '@testing-library/react'
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockTasks from '../mockTasks';
import mockUsers from '../mockUsers';
import Show from "../pages/Show";

describe("<Show />", () => {

  beforeEach(() => {
    
    render(
      <MemoryRouter initialEntries={["/show/1"]}>
        <Routes>
          <Route
            path="/show/:id"
            element={<Show tasks={mockTasks} currentUser={mockUsers[0]} />}
          />
        </Routes>
      </MemoryRouter>
    );
  })

  it("renders without crashing", () => {})

  it("displays a task title", () => {
    const title = screen.getByText(/clean filter/i)
    expect(title).toBeInTheDocument()
  });

  it("displays a task area", () => {
    const area = screen.getByText(/kitchen/i);
    expect(area).toBeInTheDocument();
  });
  
  it("displays a task item", () => {
    const item = screen.getByText(/dishwasher/i);
    expect(item).toBeInTheDocument();
  });  

  it("displays a task descr", () => {
    const descr = screen.getByText(/1\. remove filter from machine 2\. inspect for any damage 3\. rinse the filter with dishsoap and return to machine/i);
    expect(descr).toBeInTheDocument();
  });  

  it("displays return button", () => {
    const button = screen.getByRole('button', {
      name: /return/i
    })
    expect(button).toBeInTheDocument()
  })

});

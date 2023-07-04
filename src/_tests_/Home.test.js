import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe("<Home />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })

  it("renders without crashing" , () => {})

  it("has a dashboard header", () => {
    const heading = screen.getByRole("heading", {
      name: /dashboard/i
    })
    expect(heading).toBeInTheDocument()
  })

  it("has a my task link", () => {
    const myTasks = screen.getByRole("link", {
      name: /my tasks/i
    })
    expect(myTasks).toBeInTheDocument()
  })

  it("has an add task link", () => {
    const addTask = screen.getByRole("link", {
      name: /add task/i
    })
    expect(addTask).toBeInTheDocument()
  })
});

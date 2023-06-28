import Edit from '../pages/Edit'
import React from 'react'; import { render, screen, } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';

describe("<Edit />", () => {

  beforeEach(() => {

    render(
      <BrowserRouter>
        <Edit />
      </BrowserRouter>
    );
  });

  it('should render the edit form with area input', () => {
    const areaInput = screen.getByLabelText('Area:')
    expect(areaInput).toBeInTheDocument()
  })

  it('should render the login form with item input', () => {
    const itemInput = screen.getByLabelText('Item:')
    expect(itemInput).toBeInTheDocument()
  })

  it('should render the login form with picture input', () => {
    const pictureInput = screen.getByLabelText('Picture:')
    expect(pictureInput).toBeInTheDocument()
  })

  it('should render the login form with task_name input', () => {
    const task_nameInput = screen.getByLabelText('Task Name:')
    expect(task_nameInput).toBeInTheDocument()
  })

  it('should render the login form with task_descr input', () => {
    const task_descrInput = screen.getByLabelText('Task Description:')
    expect(task_descrInput).toBeInTheDocument()
  })

  it('should render the login form with frequency input', () => {
    const frequencyInput = screen.getByLabelText('Frequency:')
    expect(frequencyInput).toBeInTheDocument()
  })

  it('should render the login form with due_date input', () => {
    const due_dateInput = screen.getByLabelText('Due Date:')
    expect(due_dateInput).toBeInTheDocument()
  })

  it('should render the login form with submit button', () => {
    const loginButton = screen.getByRole('button', { name: 'Submit Updated Task' })
    expect(loginButton).toBeInTheDocument()
  })
}) 
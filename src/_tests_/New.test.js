import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, useNavigate } from 'react-router-dom';
import New from '../pages/New';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('<New />', () => {
  it('handles cancellation', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(
      <BrowserRouter>
        <New createTask={jest.fn()} currentUser={{ id: 1 }} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Cancel'));

    expect(navigate).toHaveBeenCalledWith('/index');
  });

  it("should prevent form submission", () => {
    const tempCreateTask = jest.fn()
    const navigate = jest.fn()
    useNavigate.mockReturnValue(navigate)

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <New createTask={tempCreateTask} currentUser={{id:1}} />
      </MemoryRouter>
    )

    fireEvent.change(getByPlaceholderText("Where is your task located?"), {target: {value: "Living Room"}})
    fireEvent.change(getByPlaceholderText("What item is your task associated with?"), {target: {value: "TV"}})
    fireEvent.change(getByPlaceholderText("What is the name of your task?"), {
      target: { value: "clean" },
    });
    fireEvent.change(
      getByPlaceholderText(
        "Provide a picture of the item you'll be working on"
      ),
      { target: { value: "Picture" } }
    );
    fireEvent.change(
      getByPlaceholderText("When is your task due?"),
      { target: { value: "17 Aug 2023" } }
    );
    fireEvent.change(
      getByPlaceholderText("How often do you need to complete it?"),
      { target: { value: "" } }
    );
    fireEvent.change(
      getByPlaceholderText("Provide a description of the task?"),
      { target: { value: "wipe" } }
    );



    fireEvent.click(getByText("Submit Task"))

    expect(tempCreateTask).toHaveBeenCalledWith({
      area: "Living Room",
      item: "TV",
      task_name: "clean",
      picture: "Picture",
      due_date: "17 Aug 2023",
      frequency: "",
      task_descr: "wipe",
      user_id: 1,
    });

    expect(navigate).toHaveBeenCalledWith("/indexpage")
  });
});

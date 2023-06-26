import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
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
});

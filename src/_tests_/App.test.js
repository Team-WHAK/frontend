import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('<App />', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  it('renders without crashing', () => {})

  it("renders home link on logo in header", () => {
    const linkElement = screen.getByRole('link', {
      name: /home/i
    })
  });

  it("renders about us link in header", () => {
    const linkElement = screen.getByRole('link', {
      name: /about us/i
    })
  });

  it("renders contact link in header", () => {
    const linkElement = screen.getByRole('link', {
      name: /contact/i
    })
  });

  it("renders login link in header", () => {
    const linkElement = screen.getByRole('link', {
      name: /log in/i
    })
  });

})

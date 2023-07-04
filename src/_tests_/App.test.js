import { render, screen, waitFor, act, renderHook} from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
// import { act } from 'react-dom/test-utils';

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

describe('<App /> functionality', () => {

  it("fetches tasks and sets currentUser in useEffect", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([{id:1, title: "Task 1"}])
    })

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("https://honeyhome.onrender.com/tasks")
      expect(global.fetch).toHaveBeenCalledTimes(1)
    })
  })

  // it("creates a new task and updates the state", async () => {
  //   const app = App()
  //   const testTask = {id: 1, title: "task 1"}

  //   global.fetch = json.fn().mockResolvedValueOnce({
  //     json: jest.fn().mockResolvedValueOnce([testTask])
  //   })

  //   const setTasks = jest.fn()

  //   renderHook(() => app.createTask(testTask, setTasks))

  //   expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/tasks",
  //   {
  //     body: JSON.stringify(testTask),
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     method: "POST"
  //   })

  //   expect(global.fetch).toHaveBeenCalledTimes(1)

  //   expect(setTasks).toHaveBeenCalledWith([testTask])
  // })
})

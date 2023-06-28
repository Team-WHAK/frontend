// import
import React, {useState, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css";
// component files
import Footer from "./components/Footer"
import Header from "./components/Header"
// page files
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import IndexPage from "./pages/IndexPage"
import LogIn from "./pages/LogIn"
import New from "./pages/New"
import NotFound from "./pages/NotFound"
import Show from "./pages/Show"
import SignUp from "./pages/SignUp"
import Landing from './pages/Landing'
import ContactForm from './pages/ContactForm'
import AboutUs from './pages/AboutUs'
// mock data files
import mockTasks from "./mockTasks"
import mockUsers from "./mockUsers"


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [tasks, setTasks] = useState([])

  const url = "http://localhost:3000"

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token")
    if(loggedInUser) {
      const authUserId = +JSON.parse(atob(loggedInUser?.split(".")[1])).sub
      setCurrentUser({id: authUserId})
    }
    readTask()
  }, [])

  const readTask = () => {
    fetch(`${url}/tasks`)
    .then((response) => response.json())
    .then((payload) => {
      setTasks(payload)
    })
    .catch((error) => console.log(error))
  }

  const createTask = (task) => {
    fetch(`${url}/tasks`, {
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readTask())
    .catch(errors => console.log("Task create errors:", errors))
  }

  const updateTask = (task, id) => {
    fetch(`${url}/tasks/${id}`, {
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readTask())
      .catch((errors) => console.log("Task update errors:", errors));
  }

  const deleteTask = (id) => {
    fetch(`${url}/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readTask())
      .catch((errors) => console.log("Task delete errors:", errors));
  };

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
    })
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  };  

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  }; 

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/indexpage" element={<IndexPage tasks={tasks}/>} />
        <Route path="/show/" element={<Show tasks={tasks} />} />
        <Route
          path="/edit/:id"
          element={<Edit tasks={tasks} currentUser={currentUser} />}
        />
        <Route path="/new" element={<New />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

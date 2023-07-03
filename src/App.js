// import
import React, {useState, useEffect} from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import "./App.css";
// component files
import Footer from "./components/Footer"
import Header from "./components/Header"
import Chat from "./components/Chat"
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
import LogInFail from "./pages/LogInFail";



function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  // const url = "https://honeyhome.onrender.com"
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
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST',
    })
      .then(response => {
        if(!response.ok) {
          navigate("/loginfail")
          throw Error(response.statusText)
        }
        else {
          navigate("/home")
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

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      method: "DELETE",
    })
      .then(payload => {
        localStorage.removeItem("token")
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
  };   

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp signup={signup}/>} />
        <Route path="/login" element={<LogIn login={login}/>} />
        <Route path="/loginfail" element={<LogInFail login={login}/>} />
        <Route path="/indexpage" element={<IndexPage tasks={tasks} currentUser={currentUser} deleteTask={deleteTask}/>} />
        <Route path="/show/:id" element={<Show tasks={tasks} />} />
        <Route path="/edit/:id" element={<Edit tasks={tasks} currentUser={currentUser} updateTask={updateTask}/>} />
        <Route path="/new" element={<New createTask={createTask} currentUser={currentUser}/>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

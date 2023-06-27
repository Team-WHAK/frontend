import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Edit from "./pages/Edit"
import Home from "./pages/Home"
import IndexPage from "./pages/IndexPage"
import LogIn from "./pages/LogIn"
import New from "./pages/New"
import NotFound from "./pages/NotFound"
import ProtectedIndex from "./pages/ProtectedIndex"
import Show from "./pages/Show"
import SignUp from "./pages/SignUp"
import Landing from './pages/Landing'
import ContactForm from './pages/ContactForm'
import mockTasks from "./mockTasks"
import mockUsers from "./mockUsers"
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [tasks, setTasks] = useState(mockTasks)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/indexpage" element={<IndexPage  />} />
        <Route path="/show/:id" element={<Show tasks={tasks} />} />
        <Route path="/edit" element={<Edit  />} />
        <Route path="/new" element={<New  />} />
        <Route path ="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound  />} />
        <Route path="/protectedIndex" element={<ProtectedIndex  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

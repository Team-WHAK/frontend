import React, { useState } from "react";
import { Form, Input, Button } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import '../styles/New.css';



const New = ({ createTask, currentUser }) => {
  const [newTask, setNewTask] = useState({
    Area: "",
    Item: "",
    Image: "",
    Task: "",
    Description: "",
    Frequency: "",
    Due_date: "",
    user_id: currentUser?.id
  });

  const navigate = useNavigate();

  const handleChange = (value, name) => {
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = () => {
    createTask(newTask);
    navigate("/index");
  };

  const handleCancel = () => {
    navigate("/index");
  }

  return (
    <>
      <h1>New</h1>
    </>
  );
};

export default New;

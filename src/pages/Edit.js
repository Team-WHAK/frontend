import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"

const Edit = ({ tasks, updateTask, currentUser }) => {
  const { id } = useParams()
  let currentTask = tasks?.find((task) => task.id === +id)

  const [editTask, setEditTask] = useState({
    area: currentTask?.area,
    item: currentTask?.item,
    picture: currentTask?.picture,
    task_name: currentTask?.task_name,
    task_descr: currentTask?.task_descr,
    frequency: currentTask?.frequency,
    due_date: currentTask?.due_date,
    user_id: ""
  })

  const handleChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    updateTask(editTask, currentTask?.id)
    navigate(`/taskshow/${currentTask?.id}`)
  }

  console.log("current task: " + {tasks});

  return (
    <div
      style={{
        backgroundImage: "url(back.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1>{currentTask.task_name}</h1>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="area">
                Area:
              </Label>
              <Input
                id="area"
                name="area"
                placeholder={currentTask?.area}
                type="string"
                onChange={handleChange}
                value={editTask.area}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="item">
                Item:
              </Label>
              <Input
                id="item"
                name="item"
                placeholder={currentTask?.item}
                type="string"
                onChange={handleChange}
                value={editTask.item}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="task_name">
                Task Name:
              </Label>
              <Input
                id="task_name"
                name="task_name"
                placeholder={currentTask?.task_name}
                type="string"
                onChange={handleChange}
                value={editTask.task_name}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="task_descr">
                Task Description:
              </Label>
              <Input
                id="task_descr"
                name="task_descr"
                placeholder={currentTask?.task_descr}
                type="text"
                onChange={handleChange}
                value={editTask.task_descr}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="picture">
                Picture:
              </Label>
              <Input
                id="picture"
                name="picture"
                placeholder={currentTask?.picture}
                type="text"
                onChange={handleChange}
                value={editTask.picture}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="frequency">
                Frequency:
              </Label>
              <Input
                id="frequency"
                name="frequency"
                placeholder={currentTask?.frequency}
                type="string"
                onChange={handleChange}
                value={editTask.frequency}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="due_date">
                Due Date:
              </Label>
              <Input
                id="due_date"
                name="due_date"
                placeholder={currentTask?.due_date}
                type="string"
                onChange={handleChange}
                value={editTask.due_date}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="user_id" hidden>
            User Id
          </Label>
          <Input
            id="user_id"
            name="user_id"
            onChange={handleChange}
            value={editTask.user_id = currentUser?.id}
            type="hidden"
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Updated Task
        </Button>
      </Form>
    </div>
  )
}

export default Edit;

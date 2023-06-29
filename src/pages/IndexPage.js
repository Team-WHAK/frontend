import React, {useState} from 'react';
import { Panel, Button } from 'rsuite';
import { Link } from 'react-router-dom';

const IndexPage = ({tasks, currentUser}) => {

  // const [tempTask, setTasks] = useState(tasks);

  // const deleteTask = (event, taskId) => {
  //   event.preventDefault();
  //   const updatedTasks = tempTask.filter((task) => task.id !== taskId);
  //   setTasks(updatedTasks);
  //   tasks.splice(
  //     tasks.findIndex((task) => task.id === taskId),
  //     1
  //   );
  // };

  const myTasks = tasks?.filter(task => currentUser?.id === task.user_id)
  
  
  return (

    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div
        className="practice-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3vw",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {myTasks?.map((task) => {
          return ( <Link key={task.id} to={`/show/${task.id}`}>
              <Panel
                shaded
                bordered
                bodyFill
                style={{ width: "240px", height: "100%" }}
              >
                <Panel
                  header={task.task_name}
                  className="practice-card"
                  style={{ border: "1px solid #ccc", padding: "10px" }}
                >
                  <p className="subTit">{`${task.area} - ${task.item}`}</p>
                  <Button
                    // onClick={(e) => deleteTask(e, task.id)}
                    style={{ marginTop: "10px" }}
                    color="red"
                  >
                    Delete
                  </Button>
                  <Link key={task.id}to={`/edit/${task.id}`}>
                    <Button style={{ border: "1px solid #ccc" }}>
                      Edit
                    </Button>
                  </Link>
                </Panel>
              </Panel>
            </Link>)
        })}
        <div
          className="btn-container"
          style={{ position: "sticky", right: "36vw", top: "10vw" }}
        >
          <Link to="/new">
            <Button style={{ border: "1px solid #ccc" }}> Add Task</Button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default IndexPage;
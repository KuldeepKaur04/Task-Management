import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskInput from "./TaskInput";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const AddTask = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? input : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }
    setInput("");
  };

  const editTask = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container col-sm-4 mt-5 rounded ">
      <div className="card shadow-sm text-light">
        <div className="bg-dark p-3 text-center ">
          <h2 className="text-center mb-4">Task Manager</h2>
          <div>
            <TaskInput
              input={input}
              setInput={setInput}
              AddTask={AddTask}
              editIndex={editIndex}
            />
            <ul className="list-group">
              {tasks.map((task, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center mt-3"
                  key={index}
                >
                  {task}
                  <span className="d-flex justify-content-end">
                    {" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => editTask(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

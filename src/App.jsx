import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    if (editIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? { ...task, text: taskInput } : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: taskInput, completed: false }]);
    }
    setTaskInput("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setTaskInput(tasks[index].text);
    setEditIndex(index);
  };

  return (
    <div className="container mt-4 col-sm-4 mt-5 rounded">
      <div className="card shadow-sm text-light">
        <div className="bg-dark p-3">
          <h2 className="text-center mb-4">Task Manager</h2>
          <TaskInput
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            addTask={addTask}
            editIndex={editIndex}
          />
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;

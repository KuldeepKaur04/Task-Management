import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, editTask, deleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;

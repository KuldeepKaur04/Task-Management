const TaskItem = ({ task, index, toggleTask, editTask, deleteTask }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center  mt-3 ${
        task.completed ? "text-decoration-line-through text-muted" : ""
      }`}
    >
      <span onClick={() => toggleTask(index)} className="cursor-pointer">
        {task.text}
      </span>
      <div>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => editTask(index)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

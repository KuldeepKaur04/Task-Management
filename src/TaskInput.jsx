const TaskInput = ({ taskInput, setTaskInput, addTask, editIndex }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="btn btn-success" onClick={addTask}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TaskInput;

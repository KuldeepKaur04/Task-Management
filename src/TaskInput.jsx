import React, { useState } from "react";

function TaskInput({ AddTask, input, setInput, editIndex }) {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className="d-flex" onSubmit={AddTask}>
        <input
          className="px-3"
          placeholder="write a task.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        {editIndex !== null ? (
          <button className="btn btn-info">update</button>
        ) : (
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        )}
      </form>
    </div>
  );
}

export default TaskInput;

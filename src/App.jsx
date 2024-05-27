import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h2 className="to-do-list-title">To-Do List</h2>
          <div>
            <input
              type="text"
              id="input-box"
              placeholder="What do you want to do?"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <button className="add-button" onClick={handleAddTask}>
              Add
            </button>
          </div>
          <div className="list">
            {tasks.map((task, index) => (
              <div className="list-item">
                <label key={index}>
                  <input type="checkbox" className="checkbox" />
                  <span className="task">{task}</span>
                  <br />
                </label>
                <div className="icon">
                  <img
                    className="delete"
                    src="/public/img/delete.png"
                    alt="delete-icon"
                    onClick={() => handleDeleteTask(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

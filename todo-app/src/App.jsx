import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from 'https://th.bing.com/th/id/R.2f2697404f368ef1bbf283a075bf3595?rik=xE%2fhPoRibpu%2b4A&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f07%2fhd-wallpaper-download-7.jpg&ehk=Zk5jiVxjVrv0I5AfsFaq4xbOhKO17yJaCw5Xs8kcq7A%3d&risl=&pid=ImgRaw&r=0'

//'bootstrap/dist/css/boostrap.min'

const ToDoList = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [taskInput, setTaskInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Filter tasks based on search input
  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add a task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="btn btn-primary"onClick={addTask}>Add</button>

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>

      <img src={img} alt="" />
    </div>
  );
};

export default ToDoList;

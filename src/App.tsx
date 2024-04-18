import React, { useState } from "react";
import { Task } from "./types";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/app.css";
import { v4 as uuidv4 } from "uuid";

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const addTask = (title: string, description: string) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <div className="searchbar">
        <SearchBar setSearchQuery={setSearchQuery} />
        <FilterButtons setFilter={setFilter} />
      </div>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        filter={filter}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default App;

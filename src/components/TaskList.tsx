import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
  filter: string;
  searchQuery: string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  deleteTask,
  toggleTaskCompletion,
  filter,
  searchQuery,
}) => {
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter((task) => {
      return (
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (task.description &&
          task.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;

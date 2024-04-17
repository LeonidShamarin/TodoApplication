import React from "react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  deleteTask,
  toggleTaskCompletion,
}) => {
  return (
    <div className="task-item">
      <div>
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </span>
        {task.description && <p>Description : {task.description}</p>}
      </div>
      <div>
        <button onClick={() => toggleTaskCompletion(task.id)}>Complete</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
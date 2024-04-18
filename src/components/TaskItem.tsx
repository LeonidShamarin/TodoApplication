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
        <div className="title">
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </span>
        </div>

        <div className="description">
          {task.description && <p>Description : {task.description}</p>}
        </div>
      </div>
      <div>
        <button
          className="btn-star"
          onClick={() => toggleTaskCompletion(task.id)}
        >
          <i className="fas fa-star"></i>
        </button>
        <button className="btn-trash" onClick={() => deleteTask(task.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

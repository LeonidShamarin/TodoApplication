import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskItem from "../components/TaskItem";

describe("TaskItem", () => {
  test("renders TaskItem component", () => {
    render(
      <TaskItem
        task={{
          id: "1",
          title: "Test Task",
          completed: false,
          description: "",
        }}
        deleteTask={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
        toggleTaskCompletion={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });
});

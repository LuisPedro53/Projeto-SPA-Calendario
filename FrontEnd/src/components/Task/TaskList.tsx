import { useState, useEffect } from "react";
import { Task } from "./Task";
import { useMyAppContext } from "@/Contexts/TaskAppContext";
import { TaskType } from "@/Contexts/TaskAppContextTypes";

export function TaskList() {
  const { state } = useMyAppContext();

  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    setTasks(state.tasks);
  }, [state.tasks]);

  return (
    <ul className="flex flex-col w-full">
      {tasks.map((task) => (
        <li key={task.id.toString()} className="w-full">
          {" "}
          {/* Certifique-se de que é uma string */}
          <Task
            category={task.category.toString()}
            dateToDo={task.dateToDo}
            isDone={Boolean(task.isDone)}
          >
            {task.title}
          </Task>
        </li>
      ))}
    </ul>
  );
}

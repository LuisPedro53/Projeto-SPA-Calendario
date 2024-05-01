import React, { createContext, useContext, useState } from "react";
import { TaskType, StateType, TaskAppContextType } from "./TaskAppContextTypes";

const MyAppContext = createContext({} as TaskAppContextType);

export const MyAppProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: StateType = {
    tasks: [],
    activeCategory: "",
    activeFilter: "",
  };

  const [state, setState] = useState(initialState);

  const addTask = (task: TaskType) => {
    setState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, task],
    }));
  };

  const updateTask = (id: string, updatedTask: TaskType) => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) =>
        task.id === id ? updatedTask : task
      ),
    }));
  };

  const updateActiveCategory = (categoryActive: string) => {
    setState((prevState) => ({
      ...prevState,
      activeCategory: categoryActive,
    }));
  };

  const updateActiveFilter = (filterActive: string) => {
    setState((prevState) => ({
      ...prevState,
      activeFilter: filterActive,
    }));
  };

  const AppContext = {
    state,
    addTask,
    updateTask,
    updateActiveCategory,
    updateActiveFilter,
  };

  return (
    <MyAppContext.Provider value={AppContext}>{children}</MyAppContext.Provider>
  );
};

export const useMyAppContext = () => useContext(MyAppContext);

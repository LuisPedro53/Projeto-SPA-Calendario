export type TaskType = {
  id: String;
  title: String;
  category: String;
  isDone: Boolean;
  dateToDo: Date;
};

export type MyAppProviderType = {
  state: StateType;
  addTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  updateActiveCategory: (category: string) => void;
  updateActiveFilter: (filter: string) => void;
};

export type StateType = {
  tasks: TaskType[];
  activeCategory: string;
  activeFilter: string;
};

export type TaskAppContextType = {
  state: StateType;
  addTask: (task: TaskType) => void;
  updateTask: (id: string, updatedTask: TaskType) => void;
  updateActiveCategory: (category: string) => void;
  updateActiveFilter: (filter: string) => void;
};

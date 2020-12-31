export type Todo = {
  id: string;
  name: string;
  dateCreation: string;
  completed: boolean;
};

export type UserData = {
  firstName: string;
  lastName: string;
  todos: Array<Todo>;
};

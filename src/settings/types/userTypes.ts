export type Todo = {
  id?: string;
  title: string;
  dateCreation: string;
  completed: boolean;
};

export type UserData = {
  firstName: string;
  lastName: string;
  todos: Array<Todo>;
};

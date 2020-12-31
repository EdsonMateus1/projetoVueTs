export type UserData = {
  firstName: string;
  lastName: string;
  todos: {
    id: string;
    name: string;
    dateCreation: string;
    completed: boolean;
  };
};

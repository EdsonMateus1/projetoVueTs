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

export type TodoState = {
  todos: Array<Todo>;
};

export interface InterfaceUserRepository {
  createUser(data: object): Promise<void>;
  getDataBase(): Promise<UserData | undefined>;
  createTodo(data: object): Promise<void>;
  getTodos(): Promise<Array<Todo> | undefined>;
  removeTodo(id: string): Promise<void>;
  updatedCheckTodo(value: boolean, id: string): Promise<void>;
}

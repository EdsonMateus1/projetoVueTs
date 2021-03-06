import {
  Todo,
  UserData,
  InterfaceUserRepository,
} from "@/settings/types/userTypes";
import { firebaseApp } from "../../firebase/index";

class UserRepository implements InterfaceUserRepository {
  private id = localStorage.getItem("toke-login");
  private ref = firebaseApp.database().ref(`user_id_${this.id}`);

  async createUser(data: object): Promise<void> {
    try {
      await this.ref.set(data);
    } catch (error) {
      console.log("createUser", error);
    }
  }
  async getDataBase(): Promise<UserData | undefined> {
    try {
      const res = await this.ref.once("value");
      const data = res.val();
      return data;
    } catch (error) {
      console.log("error class refDataBase get", error);
    }
  }

  async createTodo(data: object): Promise<void> {
    try {
      const id = this.ref.push().key ?? "";
      const todos = this.ref.child("todos").child(id);
      await todos.set({ ...data, id });
    } catch (error) {
      console.log("createTodo", error);
    }
  }
  async getTodos(): Promise<Array<Todo> | undefined> {
    try {
      const res = await this.ref.once("value");
      const data = res.val().todos;
      if (!data) return;
      const todos: Array<Todo> = Object.keys(data).map((key) => data[key]);
      return todos;
    } catch (error) {
      console.log("error class refDataBase get", error);
    }
  }
  async removeTodo(id: string): Promise<void> {
    try {
      await this.ref
        .child("todos")
        .child(id)
        .remove();
    } catch (error) {
      console.log("removeTodo", error);
    }
  }
  async updatedCheckTodo(value: boolean, id: string): Promise<void> {
    try {
      await this.ref
        .child("todos")
        .child(id)
        .update({
          completed: value,
        });
    } catch (error) {
      console.log("updade", error);
    }
  }
}

export default UserRepository;

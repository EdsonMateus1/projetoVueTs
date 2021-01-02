import { Todo, UserData } from "@/settings/types/userTypes";
import { firebaseApp } from "../../firebase/index";

class UserRepository {
  private id = localStorage.getItem("toke-login");
  private ref = firebaseApp.database().ref(`user_id_${this.id}`);
  //private todos: Array<never> | Array<Todo> | undefined = [];

  async createUser(data: object) {
    try {
      await this.ref.set(data);
    } catch (error) {
      console.log("error class refDataBase set", error);
    }
  }
  async getDataBase() {
    try {
      const res = await this.ref.once("value");
      const data: UserData = res.val();
      return data;
    } catch (error) {
      console.log("error class refDataBase get", error);
    }
  }

  createTodo(data: any) {
    const id = this.ref.push().key ?? "";
    const todos = this.ref.child("todos").child(id);
    todos.set({ ...data, id });
  }
  async getTodos() {
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
  async removeTodo(id: string) {
    await this.ref
      .child("todos")
      .child(id)
      .remove();
  }
  async updatedCheckTodo(value: boolean, id: string) {
    console.log("updade");

    await this.ref
      .child("todos")
      .child(id)
      .update({
        completed: value,
      });
  }
}

export default UserRepository;

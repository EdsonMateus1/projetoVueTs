import { Todo, UserData } from "@/settings/types/userTypes";
import { firebaseApp } from "../../firebase/index";

class UserRepository {
  private id = localStorage.getItem("toke-login");
  private ref = firebaseApp.database().ref(`user_id_${this.id}`);

  async setDataBase(data: object) {
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
}

export default UserRepository;

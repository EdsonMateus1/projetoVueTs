import { firebaseApp } from "../../firebase/index";

class UserRepository {
    private id = localStorage.getItem("toke-login");
    private ref = firebaseApp.database().ref(`user_id_${this.id}`);

   // constructor() { }
    async setDataBase(data: object) {
        try {
            await this.ref.set(data)
        } catch (error) {
            console.log("error class refDataBase set", error);
        }
    }
    async getDataBase(): Promise<any> {
        try {
            const res = await this.ref.once("value");
            const data = res.val();
            return data
        } catch (error) {
            console.log("error class refDataBase get", error);
        }
    }
    createKey (){
      return this.ref.push().key;
    }
};

export default UserRepository;



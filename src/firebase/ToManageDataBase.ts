import { firebaseApp } from "./index";

export interface UserData {
    nome: string;
    sobrenome: string;
}
export class ToManageDataBase {
    private id = localStorage.getItem("toke-login");
    private ref = firebaseApp.database().ref(`user_id_${this.id}`);
    constructor(private data?: object) { }
    async setDataBase() {
        try {
            await this.ref.set(this.data)
        } catch (error) {
            console.log("error class refDataBase set", error);
        }
    }
    async getDataBase(): Promise<any> {
        try {
            const res = await this.ref.once("value")
            const data = res.val()
            return data
        } catch (error) {
            console.log("error class refDataBase get", error);
        }
    }
}



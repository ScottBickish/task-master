import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"


export class Task{
    constructor(data){
        this.id = generateId()
        this.task = data.task
        this.listid = data.listid

    }

    get Template(){
        return `
        
        <li>${this.task}</li>`
    }
}

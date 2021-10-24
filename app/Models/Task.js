import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"


export class Task{
    constructor(data){
        this.id = data.id || generateId()
        this.taskname = data.taskname
        this.listId = data.listId

    }

    get Template(){
        return `
        
        <li>${this.taskname}<button class="bg-danger">X</button></li>`
    }

    
}

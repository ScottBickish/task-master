import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"


export class Task{
    constructor(data){
        this.id = data.id || generateId(),
        this.taskname = data.taskname
        this.listId = data.listId

    }

    get Template(){
        return `
        
      <input type="checkbox" id="chkbox" >  ${this.taskname}<button onclick="app.tasksController.deleteTask('${this.id}')" class="bg-danger">X</button>`
    

    }
   
    
}

import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"


export class Task{
    // constructor(id = generateId(), taskname, listId, checked = false){
    //     this.id = id
    //     this.taskname = taskname
    //     this.listId = listId
    //     this.checked = checked
    // }
    constructor(data, checked = false){
        this.id = data.id || generateId()
        this.taskname = data.taskname
        this.listId = data.listId
        this.checked = checked
      


    }

    get Template(){
        return `
      <div class="col-12 my-2">
      <input type="checkbox" id="chkbox" name="chkbox" ${this.checked ? 'checked' : ''} onclick="app.tasksController.checkBox('${this.id}')" >${this.taskname}<button onclick="app.tasksController.deleteTask('${this.id}')" class="bg-danger">X</button>
       </div>
      `
       

    }
   
   
}

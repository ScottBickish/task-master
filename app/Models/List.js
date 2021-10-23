import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"

export class List{
    constructor(data){
this.id = generateId()
this.listname = data.listname
this.color = data.color

    }
get Template(){
    return `
    
 
    <div class="col-md-4">
       <div class="card text-center mb-0" style="background-color: ${this.color}">
   <p class="m-0">${this.listname}</p> 
    <p class="m-0">1<span>/</span><span>4</span></p>
    <ul>
      <li>${this.createtasks()} <button class="bg-danger">X</button></li>
      
    </ul>
    <input type="text" placeholder="Add a task..."><button>Add</button>
    <button class="bg-danger" onclick="app.listsController.removeList('${this.id}')">Delete list</button>
      </div>
 
  </div>
    </div>
  `
}

createtasks(){
  const tasks = ProxyState.tasks.filter(t => this.id == t.task.Id)
  let template = ''
  tasks.forEach(t => {
    template += t.Template
  })
  return template
}



}


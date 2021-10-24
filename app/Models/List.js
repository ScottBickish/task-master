import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"

export class List{
    constructor(data){
this.id = data.id || generateId() 
this.listname = data.listname
this.color = data.color

    }
get Template(){
    return /*html*/`
    
 
    <div class="col-md-4 my-3">
       <div class="card text-center mb-0" style="background-color: ${this.color}">
          <p class="m-0"><b>${this.listname}</b></p> 
          <p class="m-0">${this.Tasksleft}<span>/</span><span>${this.AllTasks}</span></p>
         <div class="row container">
         
            ${this.gettasks()} 
          </div>
          <form onsubmit="app.tasksController.createTask('${this.id}')">
          <input type="text" id="taskname" name="taskname" class="form-control" placeholder="Add a task..." required minlength="3" maxlength="50"><button class="rounded" title="Add!" type="submit">Add</button>
          </form>
          <button class="bg-danger rounded" onclick="app.listsController.removeList('${this.id}')">Delete list</button>
      </div>
 
    </div>
    
  `
}



gettasks(){
  const tasks = ProxyState.tasks.filter(t => this.id == t.listId)
  let template = ''
  tasks.forEach(t => 
    template += t.Template
  )
  return template
  
}

get AllTasks(){
  let totalTasks = ProxyState.tasks.filter(banana => banana.listId === this.id)
  return totalTasks.length
}
get Tasksleft(){
  let tasksremaining = ProxyState.tasks.filter(split => split.listId === this.id && split.checked == false)
  return tasksremaining.length
}

}


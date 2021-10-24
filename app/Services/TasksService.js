import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"



class TasksService{
    
    createTask(rawTask){
        // debugger
        console.log(rawTask, 'task data in service')
        const task = new Task(rawTask)
        ProxyState.tasks = [...ProxyState.tasks,task]
    }
deleteTask(id){
    
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    
}

checkBox(id){
    
let approved = ProxyState.tasks.find(t => t.id === id)
approved.checked = !approved.checked
console.log(approved.checked)
saveState()

ProxyState.tasks = ProxyState.tasks




}


}



export const tasksService = new TasksService()
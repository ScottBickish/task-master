import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"



class TasksService{
    
    createTask(rawTask){
        // debugger
        console.log(rawTask, 'task data in service')
        const task = new Task(rawTask)
        ProxyState.tasks = [...ProxyState.tasks,task]
    }
deleteTask(id){
    
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    console.log('clicked the x in service controller');
}


}



export const tasksService = new TasksService()
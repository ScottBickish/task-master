import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"



class TasksService{
    
    createTask(rawTask){
        // debugger
        console.log(rawTask, 'task data in service')
        const task = new Task(rawTask)
        ProxyState.tasks = [...ProxyState.tasks,task]
    }



}



export const tasksService = new TasksService()
import { ProxyState } from "../AppState.js"
import{ tasksService } from "../Services/TasksService.js"



export class TasksController{
    constructor(){

        
    }
       
    createTask(listId){
        
        window.event.preventDefault()
        const form = window.event.target
        let rawTask = {
            taskname: form.taskname.value,
            listId: listId
        }

        tasksService.createTask(rawTask)
        console.log('create task', rawTask)
        form.reset()
    }
    deleteTask(id){
        tasksService.deleteTask(id)
        console.log('clicked the x in tc')
        window.confirm('are you for real???')
    }

}




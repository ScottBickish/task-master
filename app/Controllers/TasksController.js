import { ProxyState } from "../AppState.js"
import{ tasksService } from "../Services/TasksService.js"
import { saveState } from "../Utils/LocalStorage.js"



// function _draw(){
//     checkBox()
//     saveState()
// }


export class TasksController{
    constructor(){
       
        // ProxyState.on('tasks',_draw )
        
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
        if(window.confirm('are you for real???')){
             tasksService.deleteTask(id)
       
        }
       
    }

    checkBox(id){
        tasksService.checkBox(id)
       
        
    }

}




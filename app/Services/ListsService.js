import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"




class ListsService{
    constructor(){
        
    }

    createList(listData){
       
        const list = new List(listData)
        ProxyState.lists = [list, ...ProxyState.lists]
    }
    
    removeList(id){
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    }


}







export const listsService = new ListsService()
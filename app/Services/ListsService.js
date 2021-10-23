import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"




class ListsService{
    constructor(){
        console.log('list service here')
    }

    createList(listData){
        console.log('you hit create!!')
        const list = new List(listData)
        ProxyState.lists = [list, ...ProxyState.lists]
    }
    
    removeList(id){
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listid != id)
    }


}







export const listsService = new ListsService()
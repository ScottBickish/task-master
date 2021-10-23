import { ProxyState } from "../AppState.js"
// import { loadState, saveState } from "../Utils/LocalStorage.js";
import{ listsService } from "../Services/ListsService.js"

function _draw(){
    const lists = ProxyState.lists
    let template = ''
    lists.forEach(l => template += l.Template)
    document.getElementById('list').innerHTML = template
}


export class ListsController{
    constructor(){
console.log('list controller here')
        ProxyState.on('lists', _draw)
        _draw
    }
    createList(){
        
        window.event.preventDefault()
        const form = window.event.target
        const rawList = {
            listname: form.listname.value,
            color: form.color.value
        }
        listsService.createList(rawList)
        form.reset()

    }
     
    removeList(id){
        listsService.removeList(id)
        
    }

}
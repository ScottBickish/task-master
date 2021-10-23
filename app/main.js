import { ValuesController } from "./Controllers/ValuesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ListsController } from "./Controllers/ListsController.js"
class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController()
  listController = new ListsController()
}

window["app"] = new App();

import { TaskView } from "./taskView.js";
import { dataService } from "./dataService.js";

export default class TasksListView {
  element;
  dataService;

  constructor(element) {
    this.element = element;
    this.dataService = dataService;
  }

  #drawList(tasksElements) {
    this.element.innerHTML = "";

    tasksElements.forEach((taskElement) => {
      taskElement.createIn(this.element);
    });
  }

  drawAll() {
    let taskElements = [];
    let tasks = dataService.allTasks;
    if (tasks.length == 0) return this.#drawList(taskElements);

    tasks.forEach((task) => {
      taskElements.push(new TaskView(task));
    });
    this.#drawList(taskElements);
  }

  drawNotCompleted() {
    let taskElements = [];
    let tasks = this.dataService.notCompletedTasks;
    if (tasks.length == 0) return this.#drawList(taskElements);

    tasks.forEach((task) => {
      taskElements.push(new TaskView(task));
    });
    this.#drawList(taskElements);
  }

  drawArchivedTask() {
    let taskElements = [];
    let tasks = dataService.archivedTask;
    if (tasks.length == 0) return this.#drawList(taskElements);

    tasks.forEach((task) => {
      taskElements.push(new TaskView(task));
    });
    this.#drawList(taskElements);
  }
}

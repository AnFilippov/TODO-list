import { dataService } from "./dataService.js";

export default class SumListView {
  element;
  dataService;

  constructor(element, elementTwo) {
    this.element = element;
    this.elementTwo = elementTwo;
    this.dataService = dataService;
  }

  #drawList(taskElements) {
    this.element.innerHTML = taskElements[0];
    this.elementTwo.innerHTML = taskElements[1];
  }

  drawCategoryTask() {
    let tasks = dataService.categoryTask;
    let active;
    let archived;
    let taskElements = [];
    if (tasks.length == 0) {
      taskElements.push(0, 0);
      return this.#drawList(taskElements);
    }

    active = 0;
    archived = 0;
    tasks.forEach((item) => {
      if (!item.isArchived) {
        active += 1;
      } else {
        archived += 1;
      }
      return active, archived;
    });
    taskElements.push(active, archived);
    console.log(taskElements);

    this.#drawList(taskElements);
  }

  drawCategoryRandom() {
    let tasks = dataService.categoryRandom;
    let active;
    let archived;
    let taskElements = [];
    if (tasks.length == 0) {
      taskElements.push(0, 0);
      return this.#drawList(taskElements);
    }
    active = 0;
    archived = 0;
    tasks.forEach((item) => {
      if (!item.isArchived) {
        active += 1;
      } else {
        archived += 1;
      }
      return active, archived;
    });
    taskElements.push(active, archived);

    this.#drawList(taskElements);
  }

  drawCategoryIdea() {
    let tasks = dataService.categoryIdea;
    let active;
    let archived;
    let taskElements = [];
    if (tasks.length == 0) {
      taskElements.push(0, 0);
      return this.#drawList(taskElements);
    }
    active = 0;
    archived = 0;
    tasks.forEach((item) => {
      if (!item.isArchived) {
        active += 1;
      } else {
        archived += 1;
      }
      return active, archived;
    });
    taskElements.push(active, archived);

    this.#drawList(taskElements);
  }
}

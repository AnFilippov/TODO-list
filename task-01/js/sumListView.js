import { dataService } from "./dataService.js";

export default class SumListView {
  element;
  dataService;

  constructor(element, elementTwo) {
    this.element = element;
    this.elementTwo = elementTwo;
    this.dataService = dataService;
  }

  #drawList(elem, elem2) {
    this.element.innerHTML = elem;
    this.elementTwo.innerHTML = elem2;
  }

  drawCategoryTask() {
    let tasks = dataService.categoryTask;
    let active;
    let archived;
    if (tasks.lenght == 0) return (active = 0), (archived = 0);
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

    this.#drawList(active, archived);
  }

  drawCategoryRandom() {
    let tasks = dataService.categoryRandom;
    let active;
    let archived;
    if (tasks.lenght == 0) return (active = 0), (archived = 0);
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

    this.#drawList(active, archived);
  }

  drawCategoryIdea() {
    let tasks = dataService.categoryIdea;
    let active;
    let archived;
    if (tasks.lenght == 0) return (active = 0), (archived = 0);
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

    this.#drawList(active, archived);
  }
}

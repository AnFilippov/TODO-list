import { dataService } from "./dataService.js";
import SumListView from "./sumListView.js";

export class TaskView {
  constructor(task) {
    let sumTaskList = document.querySelector(".task-active");
    let archiveTaskList = document.querySelector(".task-archive");
    let activeRandomList = document.querySelector(".random-active");
    let archiveRandomList = document.querySelector(".random-archive");
    let activeIdeaList = document.querySelector(".idea-active");
    let archiveIdeaList = document.querySelector(".idea-archive");

    this.category = task.category;
    this.task = task;
    this.div = null;
    this.time = task.timeCreate;
    this.date = task.date;
    this.taskActiveTask = new SumListView(sumTaskList, archiveTaskList);
    this.taskRandom = new SumListView(activeRandomList, archiveRandomList);
    this.taskIdea = new SumListView(activeIdeaList, archiveIdeaList);
  }

  createIn(element) {
    this.div = document.createElement("div");
    this.div.classList.add("task");

    let category = document.createElement("span");
    category.innerText = this.category;

    // let input = document.createElement("input");
    // input.addEventListener("click", this.changeState.bind(this));
    // input.type = "checkbox";

    let time = document.createElement("span");
    time.innerText = this.time;

    let p = document.createElement("span");
    p.innerText = this.task.text;

    let date = document.createElement("span");
    let arrDate = this.date;
    let html = arrDate[0];

    for (let i = 1; i < arrDate.length; i++) {
      html += " " + arrDate[i];
    }

    date.innerText = html;

    let edit = document.createElement("button");
    edit.innerText = "edit";
    edit.addEventListener("click", this.edit.bind(this));

    let archive = document.createElement("button");
    archive.innerText = "archive";
    archive.addEventListener("click", this.toArchive.bind(this));

    let del = document.createElement("button");
    del.innerText = "delete";
    del.addEventListener("click", this.delete.bind(this));

    // this.div.append(input);
    this.div.append(category);
    this.div.append(time);
    this.div.append(p);
    this.div.append(date);
    this.div.append(edit);
    this.div.append(archive);
    this.div.append(del);

    // if (this.task.isDone) {
    //   this.div.classList.add("completed");
    //   input.checked = true;
    // }
    element.append(this.div);
  }

  // changeState(element) {
  //   this.task.isDone = !this.task.isDone;
  //   dataService.save();
  //   this.div.classList.toggle("completed");
  //   this.taskActiveTask.drawCategoryTask();
  // }

  toArchive(element) {
    this.task.isArchived = !this.task.isArchived;
    dataService.save();
    this.div.remove();
    this.taskActiveTask.drawCategoryTask();
    this.taskRandom.drawCategoryRandom();
    this.taskIdea.drawCategoryIdea();
  }

  edit(element) {
    let modal = document.querySelector(".modal");
    let modalName = document.querySelector("#modal-name-input");
    let modalDate = document.querySelector("#modal-date-input");
    let modalCategory = document.querySelector("#modal-category-input");
    let btn = document.querySelector(".btn-modal");
    modalCategory.value = this.category;
    let text = this.task.text;
    let date = this.date;
    modal.style.display = "flex";

    modalName.value = text;
    modalDate.value = date;

    btn.addEventListener("click", () => {
      this.task.category = modalCategory.value;
      this.task.text = modalName.value;
      this.task.date.push(modalDate.value);
      dataService.save();
    });
  }

  delete(element) {
    let text = this.task.text;
    dataService.delete(text);
    this.div.remove();
    this.taskActiveTask.drawCategoryTask();
    this.taskRandom.drawCategoryRandom();
    this.taskIdea.drawCategoryIdea();
  }
}

import Task from "./task.js";
import { dataService } from "./dataService.js";
import TasksListView from "./tasksListView.js";
import SumListView from "./sumListView.js";

let taskNameInput = document.querySelector("#task-name-input");
let taskCategory = document.querySelector("#task-category-input");
let taskDate = document.querySelector("#task-date-input");
let addTaskButton = document.querySelector("#add-task-btn");
let showAllButton = document.querySelector("#show-all-btn");
let showArchivedTask = document.querySelector("#show-archived-btn");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let titleTasks = document.querySelector(".title-tasks");
let hideCreateInput = document.querySelector(".create-task-inputs");
let taskList = document.querySelector(".task-list");
let activeTaskList = document.querySelector(".task-active");
let archiveTaskList = document.querySelector(".task-archive");
let activeRandomList = document.querySelector(".random-active");
let archiveRandomList = document.querySelector(".random-archive");
let activeIdeaList = document.querySelector(".idea-active");
let archiveIdeaList = document.querySelector(".idea-archive");

dataService.open();
let tasksListView = new TasksListView(taskList);
let taskActiveTask = new SumListView(activeTaskList, archiveTaskList);
let taskRandom = new SumListView(activeRandomList, archiveRandomList);
let taskIdea = new SumListView(activeIdeaList, archiveIdeaList);

close.addEventListener("click", () => {
  modal.style.display = "none";
});

addTaskButton.addEventListener("click", addTaskHandler);
showAllButton.addEventListener("click", showAllHandler);
showArchivedTask.addEventListener("click", showArchivedHandler);

window.addEventListener("load", function () {
  tasksListView.drawAll();
  taskActiveTask.drawCategoryTask();
  taskRandom.drawCategoryRandom();
  taskIdea.drawCategoryIdea();
});

taskNameInput.addEventListener("keydown", function (e) {
  if (e.code == "Enter") addTaskHandler();
});

function addTaskHandler() {
  if (taskNameInput.value) {
    let newTask = new Task(
      taskCategory.value,
      taskNameInput.value,
      taskDate.value
    );
    dataService.add(newTask);
    tasksListView.drawAll();
    taskActiveTask.drawCategoryTask();
    taskRandom.drawCategoryRandom();
    taskIdea.drawCategoryIdea();
    taskNameInput.value = "";
  } else {
    alert("enter task name");
  }
}

function showAllHandler() {
  tasksListView.drawAll();
  titleTasks.innerHTML = "All tasks";
  hideCreateInput.style.display = "block";
}

function showArchivedHandler() {
  tasksListView.drawArchivedTask();
  titleTasks.innerHTML = "Archived tasks";
  hideCreateInput.style.display = "none";
}

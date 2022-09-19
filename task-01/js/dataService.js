export let dataService = {
  tasks: [],

  get sumTasks() {
    return this.tasks;
  },

  get allTasks() {
    return this.tasks.filter((task) => task.isArchived == false);
  },

  get notCompletedTasks() {
    let complited = this.tasks.filter((task) => task.isDone == false);
    return complited.filter((task) => task.isArchived == false);
  },

  get archivedTask() {
    return this.tasks.filter((task) => task.isArchived == true);
  },

  get categoryTask() {
    return this.tasks.filter((task) => task.category == "Task");
  },

  get categoryRandom() {
    return this.tasks.filter((task) => task.category == "Random Thought");
  },

  get categoryIdea() {
    return this.tasks.filter((task) => task.category == "Idea");
  },

  add(task) {
    this.tasks.push(task);
    this.save();
  },

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },

  open() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  },

  delete(text) {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].text === text) {
        this.tasks.splice(i, 1);
      }
    }
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
};

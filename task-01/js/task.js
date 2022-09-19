export default class Task {
  constructor(category, text, date) {
    this.category = category;
    this.text = text;
    this.isDone = false;
    this.isArchived = false;
    this.timeCreate = new Date().toLocaleString();
    this.date = [date];
  }
}

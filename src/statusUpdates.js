import { tasks, saveTasks, renderTaskList } from './index.js'; // eslint-disable-line import/no-cycle

export const markComplete = (index) => {
  tasks[index].completed = true;
  saveTasks();
  renderTaskList();
};

export const markIncomplete = (index) => {
  tasks[index].completed = false;
  saveTasks();
  renderTaskList();
};

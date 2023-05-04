import { tasks, saveTasks, renderTaskList } from "./index.js";

export const markComplete = (index) => {
    // console.log("completed")
    tasks[index].completed = true;
    saveTasks();
    renderTaskList();
}

export const markIncomplete = (index) => {
    // console.log("incompleted")
    tasks[index].completed = false;
    saveTasks();
    renderTaskList();
}
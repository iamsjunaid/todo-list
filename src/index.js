import './style.css';
import { markComplete, markIncomplete } from './statusUpdates.js'; // eslint-disable-line import/no-cycle

const TASKS_STORAGE_KEY = 'tasks';
export let tasks = []; // eslint-disable-line import/no-mutable-exports
let nextIndex = 0;

const taskList = document.getElementById('task-list');
const taskListPlaceholder = document.getElementById('task-list-placeholder');
const taskDescriptionInput = document.getElementById('task-description-input');
const addTaskButton = document.getElementById('add-task-button');
const clearCompletedBtn = document.getElementById('clear-completed');

export const saveTasks = () => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const editTask = (index, newDescription) => {
  tasks[index].description = newDescription;

  saveTasks();
  renderTaskList(); // eslint-disable-line no-use-before-define
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  nextIndex -= 1;

  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }
  saveTasks();
  renderTaskList(); // eslint-disable-line no-use-before-define
};

export const renderTaskList = () => {
  taskList.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        markComplete(index);
      } else {
        markIncomplete(index);
      }
    });

    const taskDescriptionElement = document.createElement('span');
    taskDescriptionElement.textContent = task.description;
    taskDescriptionElement.addEventListener('click', () => {
      const newDescription = prompt('Enter the new task description', task.description); // eslint-disable-line no-alert
      if (newDescription !== null) {
        editTask(task.index, newDescription);
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'fas fa-trash icons-btn';
    deleteButton.ariaHidden = 'true';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescriptionElement);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
};

const clearCompletedTasks = () => {
  tasks = tasks.filter((item) => !item.completed);
  let i = 0;
  tasks.forEach((task) => {
    task.index = i;
    i += 1;
  });
  saveTasks();
  renderTaskList();
};

clearCompletedBtn.addEventListener('click', () => {
  clearCompletedTasks();
});

const loadTasks = () => {
  const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
  if (tasksJson) {
    tasks = JSON.parse(tasksJson);
    nextIndex = tasks.length;
  }
};

const addTask = () => {
  const taskDescription = taskDescriptionInput.value.trim();
  if (taskDescription !== '') {
    const task = {
      description: taskDescription,
      completed: false,
      index: nextIndex,
    };
    tasks.push(task);
    nextIndex += 1;

    saveTasks();
    renderTaskList();

    taskDescriptionInput.value = '';
  }
};

addTaskButton.addEventListener('click', () => {
  addTask();
});

taskDescriptionInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

loadTasks();
renderTaskList();

taskListPlaceholder.appendChild(taskList);
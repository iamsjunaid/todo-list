import './style.css';

const tasks = [
  {
    description: 'Buy groceries',
    completed: false,
    index: 2,
  },
  {
    description: 'Do laundry',
    completed: true,
    index: 0,
  },
  {
    description: 'Pay bills',
    completed: false,
    index: 1,
  },
];

const taskList = document.getElementById('task-list');
const taskListPlaceholder = document.getElementById('task-list-placeholder');

tasks.sort((a, b) => a.index - b.index);

tasks.forEach((task) => {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;

  const taskDescription = document.createElement('span');
  taskDescription.textContent = task.description;

  listItem.appendChild(checkbox);
  listItem.appendChild(taskDescription);
  taskList.appendChild(listItem);
});

taskListPlaceholder.appendChild(taskList);

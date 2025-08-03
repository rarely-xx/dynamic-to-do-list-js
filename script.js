document.addEventListener('DOMContentLoaded', function () {
  // Select the necessary DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item (li) for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add event listener to remove the task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append the button to the list item and then to the list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for button click
  addButton.addEventListener('click', addTask);

  // Event listener for pressing "Enter"
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

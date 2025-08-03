document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn'); // ✅ Correct usage here

    // Remove task on click
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Add button to list item and list item to list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
  }

  // Event: Click button
  addButton.addEventListener('click', addTask);

  // Event: Press Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

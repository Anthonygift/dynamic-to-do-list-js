// Wait for the HTML document to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function () {
    // Select the Add Task button, input field, and task list using their IDs
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item
        const li = document.createElement('li');

        // Create a span to hold the label and task content
        const taskLabel = document.createElement('span');
        taskLabel.textContent = `Task to Be Done: ${taskText}`;
        taskLabel.style.marginRight = '10px';

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove task on click
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append label and button to list item, then to task list
        li.appendChild(taskLabel);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

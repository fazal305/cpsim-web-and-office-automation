const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskValue;
    li.appendChild(span);
    const btnContainer = document.createElement('div');
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(span); 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(li); // Link to delete function

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);
    taskList.appendChild(li);
    taskInput.value = "";
}
function editTask(taskSpan) {
    const newMessage = prompt("Edit your task:", taskSpan.textContent);
    if (newMessage !== null && newMessage.trim() !== "") {
        taskSpan.textContent = newMessage;
    }
}
function deleteTask(taskItem) {
    if (confirm("Are you sure you want to delete this task?")) {
        taskItem.remove();
    }
}
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

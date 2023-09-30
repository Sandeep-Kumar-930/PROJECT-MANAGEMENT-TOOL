document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");
    const taskList = document.getElementById("task-list");
    const addProjectButton = document.getElementById("add-project");
    const addTaskButton = document.getElementById("add-task");

    addProjectButton.addEventListener("click", function () {
        const projectName = prompt("Enter project name:");
        if (projectName) {
            const projectItem = document.createElement("li");
            projectItem.innerHTML = `
                <span class="project-title">${projectName}</span>
                <button class="delete-project">Delete</button>
            `;
            projectList.appendChild(projectItem);
        }
    });

    addTaskButton.addEventListener("click", function () {
        const taskName = prompt("Enter task name:");
        if (taskName) {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span class="task-title">${taskName}</span>
                <button class="delete-task">Delete</button>
            `;
            taskList.appendChild(taskItem);
        }
    });

    projectList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-project")) {
            const projectItem = event.target.parentElement;
            projectList.removeChild(projectItem);
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-task")) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    });
});

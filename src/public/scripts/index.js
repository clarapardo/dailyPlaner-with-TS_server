/******************************************************************************
 *                          Fetch and display tasks
 ******************************************************************************/

displayTasks()


function displayTasks() {
    httpGet('/api/tasks/all')
        .then(response => response.json())
        .then((response) => {
            var allTasks = response.tasks
            // Empty the anchor
            var allTasksAnchor = document.getElementById('all-tasks-anchor')
            allTasksAnchor.innerHTML = ''
            // Append tasks to anchor
            allTasks.forEach((task) => {
                allTasksAnchor.innerHTML += getTaskDisplayEle(task)
            })
        })
}


function getTaskDisplayEle(task) {
    return `<div class="task-display-ele">

        <div class="normal-view">
            <div>Task name: ${task.taskName}</div>
            <div>Deadline: ${task.deadline}</div>
            <div>Description: ${task.description}</div>
            <div>Category: ${task.category}</div>
            <div>Status: ${task.status}</div>
            <button class="edit-task-btn" data-task-id="${task.id}">
                Edit
            </button>
            <button class="delete-task-btn" data-task-id="${task.id}">
                Delete
            </button>
        </div>
        
        <div class="edit-view">
            <div>
                Task name: <input class="taskName-edit-input" value="${task.taskName}">
            </div>
            <div>
                Deadline: <input class="deadline-edit-input" value="${task.deadline}">
            </div>
            <div>
                Description: <input class="description-edit-input" value="${task.description}">
            </div>
            <div>
                Category: <input class="category-edit-input" value="${task.category}">
            </div>
            <div>
                Status: <input class="status-edit-input" value="${task.status}">
            </div>

            <button class="submit-edit-btn" data-task-id="${task.id}">
                Submit
            </button>
            <button class="cancel-edit-btn" data-task-id="${task.id}">
                Cancel
            </button>
        </div>
    </div>`
}


/******************************************************************************
 *                        Add, Edit, and Delete Tasks
 ******************************************************************************/

document.addEventListener('click', function (event) {
    event.preventDefault()
    var ele = event.target


    if (ele.matches('#add-task-btn')) {
        addTask()
    } else if (ele.matches('.edit-task-btn')) {
        showEditView(ele.parentNode.parentNode)
    } else if (ele.matches('.cancel-edit-btn')) {
        cancelEdit(ele.parentNode.parentNode)
    } else if (ele.matches('.submit-edit-btn')) {
        submitEdit(ele)
    } else if (ele.matches('.delete-task-btn')) {
        deleteTask(ele)
    }
}, false)


function addTask() {
    var taskNameInput = document.getElementById('taskName-input')
    var deadlineInput = document.getElementById('deadline-input')
    var descriptionInput = document.getElementById('description-input')
    var categoryInput = document.getElementById('category-input')

    var data = {
        task: {
            taskName: taskNameInput.value,
            deadline: deadlineInput.value,
            description: descriptionInput.value,
            category: categoryInput.value,
            status: "toDo"
        },
    }

    httpPost('/api/tasks/add', data)
        .then(() => displayTasks())
}


function showEditView(taskEle) {
    var normalView = taskEle.getElementsByClassName('normal-view')[0]
    var editView = taskEle.getElementsByClassName('edit-view')[0]
    normalView.style.display = 'none'
    editView.style.display = 'block'
}


function cancelEdit(taskEle) {
    var normalView = taskEle.getElementsByClassName('normal-view')[0]
    var editView = taskEle.getElementsByClassName('edit-view')[0]
    normalView.style.display = 'block'
    editView.style.display = 'none'
}


function submitEdit(ele) {
    var taskEle = ele.parentNode.parentNode
    var taskNameInput = taskEle.getElementsByClassName('taskName-edit-input')[0]
    var deadlineInput = taskEle.getElementsByClassName('deadline-edit-input')[0]
    var descriptionInput = taskEle.getElementsByClassName('description-edit-input')[0]
    var categoryInput = taskEle.getElementsByClassName('category-edit-input')[0]

    var id = ele.getAttribute('data-task-id')
    var data = {
        task: {
            taskName: taskNameInput.value,
            deadline: deadlineInput.value,
            description: descriptionInput.value,
            category: categoryInput.value,
            id: Number(id),
        },
    }

    httpPut('/api/tasks/update', data)
        .then(() => {
            displayTasks()
        })
}


function deleteTask(ele) {
    var id = ele.getAttribute('data-task-id')
    httpDelete('/api/tasks/delete/' + id)
        .then(() => {
            displayTasks()
        })
}


function httpGet(path) {
    return fetch(path, getOptions('GET'))
}


function httpPost(path, data) {
    return fetch(path, getOptions('POST', data))
}


function httpPut(path, data) {
    return fetch(path, getOptions('PUT', data))
}


function httpDelete(path) {
    return fetch(path, getOptions('DELETE'))
}


function getOptions(verb, data) {
    var options = {
        dataType: 'json',
        method: verb,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    if (data) {
        options.body = JSON.stringify(data)     // Aquí se esta pasando a JSON ! FUTURO: cambiarlo para meterlo en la BBDD
    }
    return options
}


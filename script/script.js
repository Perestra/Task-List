

const header = document.querySelector('.header')
const formTag = document.querySelector('form')
const ulTag = document.querySelector('.items-list')

const taskList = JSON.parse(localStorage.getItem('Task')) || []
const textTypedInput = document.querySelector('.text-input')

function hasTask() {

    const noTask = document.querySelector('.no-task')
    
    if(taskList.length >= 1) {
        noTask.classList.add('disable')
    } else {
        noTask.classList.remove('disable')
    }
}

taskList.forEach(element => {
    createTask(element) 
})

function checkTaskExists(Task) {
    const findTask = taskList.find( task => task.taskName ===  textTypedInput.value)

    if(!findTask) {
        Task.id = taskList[taskList.length - 1] ? (taskList[taskList.length-1]).id + 1 : 0
        createTask(Task)
        taskList.push(Task)
        localStorage.setItem('Task', JSON.stringify(taskList))
        textTypedInput.value = ''
    }else {
        Task.id = findTask.id
        updateTask(Task)
        taskList[taskList.findIndex(elem => elem.id === findTask.id)] = Task
    }
}


formTag.onsubmit = e => {
    e.preventDefault()
    
    const Task = {'taskName': textTypedInput.value}

    if(textTypedInput.value.trim() !== '') {
        checkTaskExists(Task)
    }
    hasTask()
}


function createTask(task) {
   
    const liTag = document.createElement('li')
    liTag.classList.add('item')

    const itemName = document.createElement('div')
    itemName.classList.add('item-name')

    const h2Tag = document.createElement('h2')
    h2Tag.innerHTML = task.taskName
    h2Tag.dataset.id = task.id

    const itemButton = document.createElement('div')
    itemButton.classList.add('item-button')

    itemName.appendChild(createInputCheckBox())
    itemName.appendChild(h2Tag)
    liTag.appendChild(itemName)
    itemButton.appendChild(createDeleteButton(task.id))
    liTag.appendChild(itemButton)
    ulTag.appendChild(liTag)

    return liTag
}
function updateTask(task) {
    document.querySelector(`[data-id="${task.id}"]`)
}


function createInputCheckBox() {
    const inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')
    inputCheckBox.classList.add('input-checkbox')

    inputCheckBox.addEventListener('click', function() {
        checkTask(this.parentNode.childNodes[1])
    })

    return inputCheckBox
}
function checkTask(task) {

    const liTag = task.parentNode.parentNode
    const checkBox = task.parentNode.childNodes[0]

    if(checkBox.checked) {
        task.style.textDecorationLine = 'line-through'
        liTag.classList.add('completed')
    }else {
        task.style.removeProperty('text-decoration-line')
        liTag.classList.remove('completed')
    }

}


function createDeleteButton(id) {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

    deleteButton.addEventListener('click', function() {
        deleteTask(this.parentNode.parentNode, id)
    } )

    return deleteButton
}
function deleteTask(task, id) {
    task.remove()
    taskList.splice(taskList.findIndex(elem => elem.id === id), 1)
    localStorage.setItem('Task', JSON.stringify(taskList))
    hasTask()
}

hasTask()

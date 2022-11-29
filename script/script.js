

const formTag = document.querySelector('form')
const ulTag = document.querySelector('.items-list')
const taskList = JSON.parse(localStorage.getItem('Task')) || []

taskList.forEach(element => {
    createTask(element) 
    console.log(element)
})

formTag.onsubmit = e => {
    e.preventDefault()
    
    const textTypedInput = document.querySelector('.text-input')
    
    const findTask = taskList.find( task => task.taskName ===  textTypedInput.value)
    
    const Task = {'taskName': textTypedInput.value}

    if(findTask) {
        Task.id = findTask.id
        updateTask(Task)
        taskList[taskList.findIndex(elem => elem.id === findTask.id)] = Task
    }else {
        Task.id = taskList[taskList.length - 1] ? (taskList[taskList.length-1]).id + 1 : 0
        createTask(Task)
        taskList.push(Task)
    }

    localStorage.setItem('Task', JSON.stringify(taskList))
    textTypedInput.value = ''

}

function createTask(task) {
   
    const liTag = document.createElement('li')
    liTag.classList.add('item')

    const itemName = document.createElement('div')
    itemName.classList.add('item-name')

    const inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')
    inputCheckBox.classList.add('input-checkbox')

    const h2Tag = document.createElement('h2')
    h2Tag.innerHTML = task.taskName
    h2Tag.dataset.id = task.id

    const itemButton = document.createElement('div')
    itemButton.classList.add('item-button')

    itemName.appendChild(inputCheckBox)
    itemName.appendChild(h2Tag)
    liTag.appendChild(itemName)
    itemButton.appendChild(createEditButton())
    itemButton.appendChild(createDeleteButton(task.id))
    liTag.appendChild(itemButton)
    ulTag.appendChild(liTag)

    return liTag
}
function updateTask(task) {
    console.log(document.querySelector(`[data-id="${task.id}"]`))
    document.querySelector(`[data-id="${task.id}"]`)

}

function createEditButton() {
    const editButton = document.createElement('button')
    editButton.classList.add('edit-button')

    const penIcon = document.createElement('i')
    penIcon.classList.add('fa-pen', 'fa-solid')

    editButton.appendChild(penIcon)

    return editButton
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
}


// inputCheckBox.addEventListener('click', () => {
//     if(inputCheckBox.checked) {
//         h2Tag.style.textDecorationLine = 'line-through'
//         liTag.classList.add('completed')
//     }else {
//         h2Tag.style.removeProperty('text-decoration-line')
//         liTag.classList.remove('completed')
//     }
// })

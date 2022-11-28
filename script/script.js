

const formTag = document.querySelector('form')
const ulTag = document.querySelector('.items-list')
const taskList = JSON.parse(localStorage.getItem('Task')) || []


const createEditButton = () => {
    const editButton = document.createElement('button')
    editButton.classList.add('edit-button')
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'

    return editButton
}

const createDeleteButton = () => {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

    return deleteButton
}


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
    }else {
        Task.id = taskList.length
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

    liTag.appendChild(itemName)
    itemName.appendChild(inputCheckBox)
    itemName.appendChild(h2Tag)
    liTag.appendChild(itemButton)
    // itemButton.appendChild(createEditButton)
    // itemButton.appendChild(createDeleteButton)
    ulTag.appendChild(liTag)

    return liTag
}




function updateTask(task) {
    console.log(document.querySelector(`[data-id="${task.id}"]`))
    document.querySelector(`[data-id="${task.id}"]`)

}

// deleteButton.addEventListener('click', () => {
//     liTag.remove()
// })


// editButton.addEventListener('click', () => {
//     h2Tag.toggleAttribute('contenteditable')
//     if(h2Tag.hasAttribute('contenteditable')) {
//         editButton.innerHTML = '<i class="fa-solid fa-check"></i>'
//     }else {
//         editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
//     }
// })


// inputCheckBox.addEventListener('click', () => {
//     if(inputCheckBox.checked) {
//         h2Tag.style.textDecorationLine = 'line-through'
//         liTag.classList.add('completed')
//     }else {
//         h2Tag.style.removeProperty('text-decoration-line')
//         liTag.classList.remove('completed')
//     }
// })

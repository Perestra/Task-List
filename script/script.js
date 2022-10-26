
const formTag = document.querySelector('form')
const textTypedInput = document.querySelector('.text-input')
const addTaskButton = document.querySelector('.add-button')
const ulTag = document.querySelector('.items-list')

function crudActions(value) {
    const liTag = document.createElement('li')
    liTag.classList.add('item')

    const inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')
    inputCheckBox.classList.add('input-checkbox')

    const h2Tag = document.createElement('h2')
    h2Tag.innerText = value

    const editButton = document.createElement('button')
    editButton.classList.add('edit-button')
    editButton.innerHTML = '<span class="material-symbols-outlined">edit</span>'

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = '<span class="material-symbols-outlined">delete</span>'

    liTag.appendChild(inputCheckBox)
    liTag.appendChild(h2Tag)
    liTag.appendChild(editButton)
    liTag.appendChild(deleteButton)
    ulTag.appendChild(liTag)
    
    

}


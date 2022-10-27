
const formTag = document.querySelector('form')
const textTypedInput = document.querySelector('.text-input')
const addTaskButton = document.querySelector('.add-button')
const ulTag = document.querySelector('.items-list')

function crudActions(value) {
    const liTag = document.createElement('li')
    liTag.classList.add('item')

    const itemName = document.createElement('div')
    itemName.classList.add('item-name')

    const inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')
    inputCheckBox.classList.add('input-checkbox')

    const h2Tag = document.createElement('h2')
    h2Tag.innerText = value


    const itemButton = document.createElement('div')
    itemButton.classList.add('item-button')

    const editButton = document.createElement('button')
    editButton.classList.add('edit-button')
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

    liTag.appendChild(itemName)
    itemName.appendChild(inputCheckBox)
    itemName.appendChild(h2Tag)
    liTag.appendChild(itemButton)
    itemButton.appendChild(editButton)
    itemButton.appendChild(deleteButton)
    ulTag.appendChild(liTag)

    editButton.addEventListener('click', () => {
        h2Tag.toggleAttribute('contenteditable')
        if(h2Tag.hasAttribute('contenteditable')) {
            editButton.innerHTML = '<i class="fa-solid fa-check"></i>'
        }else {
            editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
        }
    })

    deleteButton.addEventListener('click', () => {
        liTag.remove()
    })

    inputCheckBox.addEventListener('click', () => {
        if(inputCheckBox.checked) {
            h2Tag.style.textDecorationLine = 'line-through'
        }else {
            h2Tag.style.removeProperty('text-decoration-line')
        }
    })

}

formTag.onsubmit = e => {
    e.preventDefault()

    const inputValue = textTypedInput.value
    crudActions(inputValue)
}

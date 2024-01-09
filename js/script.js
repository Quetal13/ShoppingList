const shoppingListInput = document.querySelector('#input');
const shoppingListButton = document.querySelector('#btn');
const shoppingList = document.querySelector('#list')


//Add a new element to the list when the user clicks the "add" button
shoppingListButton.addEventListener('click', () => {
    let shoppingListValue = shoppingListInput.value;
    shoppingListInput.value = '';

    const newElement = document.createElement('li');
    const container = document.createElement('div');
    const newElementText = document.createElement('span');
    const deleteButton = document.createElement('button');

    newElementText.textContent = shoppingListValue;
    deleteButton.textContent = "delete";

    //Delete a list element when the user click the "delete" button
    deleteButton.addEventListener('click', () => {
        shoppingList.removeChild(newElement);
    })

    container.appendChild(newElementText);
    container.appendChild(deleteButton);
    newElement.appendChild(container)
    shoppingList.appendChild(newElement)

    shoppingListInput.focus();
})
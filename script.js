const buttonAdd = document.createElement('button');
const mainContainer = document.querySelector('.wrap__container');


mainContainer.appendChild(buttonAdd);
buttonAdd.textContent = 'ADD TO THE LIST';
buttonAdd.classList.add('button-add');

function readInputValue() {
    return document.querySelector('.insert-input').value;
}

function onClick() {
    let listElement = document.createElement('li');
    let node = document.createTextNode(readInputValue());
    listElement.appendChild(node);

    let ourList = document.querySelector('.list');
    ourList.appendChild(listElement);
}

buttonAdd.addEventListener('click', onClick);


const buttonAdd = document.createElement('button');
const mainContainer = document.querySelector('.wrap__container');

mainContainer.appendChild(buttonAdd);
buttonAdd.textContent = 'Click me';
buttonAdd.classList.add('button-add');


function onClick() {
    console.log('Hello');
}

buttonAdd.addEventListener('click', onClick);


const buttonAdd = document.createElement('button');
buttonAdd.textContent = 'Click me';
document.body.appendChild(buttonAdd);

buttonAdd.classList.add('button-add');


function onClick() {
    console.log('Hello');
}

buttonAdd.addEventListener('click', onClick);


// Write your code here!
main.remove(main);

const newHeader = document.createElement('h1')


newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "<h1>Joe is the champion</h1>";

document.body.appendChild(newHeader);

const button = document.createElement('button')
button.textContent = 'Click Me'
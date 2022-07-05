//Write your code here!

document.querySelector('main').remove();

const newHeader = document.querySelector('h1');

function modNewHeader(newHeader){
    document.getElementById(`victory`).textContent = newHeader
}

modNewHeader(`Garret is the champion!`);
console.log("JS file is connected!");

const fruits = document.querySelectorAll('#fruits svg:not(#logo)');

function logId() {
    console.log('This is a', this.id);
}

fruits.forEach(fruit => fruit.addEventListener('click', logId));
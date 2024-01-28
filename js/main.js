console.log("JS file is connected!");

function logThisId() {
    console.log(this);
    console.log('This is a', this.id);
}

//Grapefruit
const grapefruitGraphic = document.querySelector('#Grapefruit');
console.log(grapefruitGraphic)
grapefruitGraphic.addEventListener('click', logThisId);

//Orange
const orangeGraphic = document.querySelector('#Orange');
console.log(orangeGraphic)
orangeGraphic.addEventListener('click', logThisId);

//Pineapple
const pineappleGraphic = document.querySelector('#Pineapple');
console.log(pineappleGraphic)
pineappleGraphic.addEventListener('click', logThisId);

//Lime
const limeGraphic = document.querySelector('#Lime');
console.log(limeGraphic)
limeGraphic.addEventListener('click', logThisId);

//Blueberry
const blueberryGraphic = document.querySelector('#Blueberry');
console.log(blueberryGraphic)
blueberryGraphic.addEventListener('click', logThisId);

//Passion Fruit
const passionfruitGraphic = document.querySelector('#Passion_Fruit');
console.log(passionfruitGraphic)
passionfruitGraphic.addEventListener('click', logThisId);

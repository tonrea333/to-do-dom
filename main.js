const addButton = document.querySelector("#buttonone");
const taskButton = document.querySelector("#buttontwo");
const allButton = document.querySelector("buttonthree");
const listofTask = document.querySelector("output")
const inputText = document.querySelector("input[type=text]")

const taskMaster = [];


//Need Array to store task
addButton.addEventListener("click", addClick);
function addClick(){
    let stringText = inputText.value;
//textTask = inputText.value 
taskMaster.push(stringText);
function textErase(){
    stringText = " ";
}
textErase()

//taskMaster.pop(stringText);
console.log(inputText.value)
console.log(taskMaster)

}
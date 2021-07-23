const addButton = document.querySelector("#buttonone");
const taskButton = document.querySelector("#buttontwo");
const allButton = document.querySelector("buttonthree");
const listofTask = document.querySelector("output")
const inputText = document.querySelector("input[type=text]")
const orderList = document.querySelector("#todoTracker");
const taskMaster = [];
const displayTodo = [];

//Need Array to store task
addButton.addEventListener("click", addClick);
function addClick(event) {
    let stringText = inputText.value;
    //textTask = inputText.value 


    taskMaster.push(stringText);
   const todotxt = taskMaster;
    //loops through array displaying items in list
   for (let x of todotxt) {
    //not sure why this fixes the duplication of taskMaster in loop
       
    const minusArray = taskMaster.shift(1)  
    orderList.innerHTML = orderList.innerHTML +  "<li>"+ x + "</li>" ;
    
    
    
    //console.log(orderList)
   }
//Function to line through todo task
orderList.addEventListener("click", lineClick);

function lineClick(event){
    event.target.style.textDecoration = "line-through";
}
//================================================


    //if (taskMaster.push() === "") {
       // const newli = document.createElement("li");
       // const node = taskMaster.push()
       // newli.appendChild(node);
       // const olElement = document.getElementById(orderList);
       // olElement.appendChild(newli)
   // }

//Function to remove text from add todo input section

    function removeText(inputText) {
        inputText.value = "";
    } removeText(inputText)
//=================================================


    console.log(inputText.value)
    console.log(taskMaster)
}
//=======================




//stringText.push("hammer");
 //onfocus(" ")
//function removeText(){
 //   let stringText = inputText.value;
//stringText.remove();

//} removeText()
//function textErase(){
   // stringText = " ";
//}
//textErase()

//taskMaster.pop(stringText);



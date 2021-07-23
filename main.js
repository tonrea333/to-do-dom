const addButton = document.querySelector("#buttonone");
const taskButton = document.querySelector("#buttontwo");
const allredButton = document.querySelector("#buttonthree");
const listofTask = document.querySelector("output")
const inputText = document.querySelector("input[type=text]")
const orderList = document.querySelector("#todoTracker");
const taskMaster = [];
const displayTodo = [];

//Function to add task to todo list
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
        orderList.innerHTML = orderList.innerHTML + "<li>" + x + "</li>";

        console.log(orderList)

        //console.log(orderList)
    }
    //Function to line through todo task
    orderList.addEventListener("click", lineClick);

    function lineClick(event) {
        event.target.style.textDecoration = "line-through";
        //console.log(event.target)
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


    //console.log(inputText.value)
    //console.log(taskMaster)
}
//=======================
//Function to remove line-through list items

taskButton.addEventListener("click", onetaskRemove);



function onetaskRemove() {
    orderList.removeChild(orderList)
    

    console.log("hello")

    //todoLineThrough.remove()
    console.log(orderList)
    console.log(orderList.innerHTML)
    console.log(orderList.innerText)
console.log(allredButton)
}

//=========================================
//Function Remove all todo items

allredButton.addEventListener("click", alltodoRemove);

function alltodoRemove(){
    orderList.remove(orderList.innerHTML)   
}


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



const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');

function addTask(){
    if(inputBox.value=== ''){
        alert("Please enter a task");
    }else {
        let li = document.createElement("li"); 
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        //adding the cross icon
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value= '';
    saveData()
}

listContainer.addEventListener('click', function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle( "checked" );
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData()
    }
}, false);

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  
//Save the data each time we add an item, check or uncheck an item and when we remove and item
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTasks();
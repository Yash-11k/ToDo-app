let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

let list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerText = task.text;

li.onclick = function(){
tasks[index].completed = !tasks[index].completed;
saveTasks();
renderTasks();
}

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.className="deleteBtn";

deleteBtn.onclick = function(e){
e.stopPropagation();
tasks.splice(index,1);
saveTasks();
renderTasks();
}

li.appendChild(deleteBtn);
list.appendChild(li);

});

document.getElementById("taskCount").innerText =
"Total Tasks: " + tasks.length;

}

function addTask(){

let input = document.getElementById("taskInput");

if(input.value===""){
alert("Enter a task");
return;
}

tasks.push({
text: input.value,
completed:false
});

input.value="";

saveTasks();
renderTasks();

}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

renderTasks();
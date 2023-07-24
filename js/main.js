let input = document.querySelector("input");
let addBtn = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// focus on input
// window.onload = () => {
//     input.focus();
// }

addBtn.onclick = () => {
    if (input.value === "") {
        console.log("no")
    }else {
        let noTasks = document.querySelector(".no-tasks");
        
        if (document.body.contains(document.querySelector(".no-tasks"))) {
            noTasks.remove();
        }

        let mainSpan = document.createElement("span");
        mainSpan.classList.add("task-box");
        let text = document.createTextNode(input.value);
        mainSpan.appendChild(text);

        let deleteBtn = document.createElement("span");
        let deleteText = document.createTextNode("Delete");
        deleteBtn.classList.add("delete");
        deleteBtn.appendChild(deleteText);

        mainSpan.appendChild(deleteBtn);
        tasksContainer.appendChild(mainSpan);

        input.value = "";

        calculate();
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove();

        if (tasksContainer.childElementCount == 0) {
            noTask();
        }
    }

    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");
    }
    calculate();
});

function noTask() {
    let msgSpan = document.createElement("span");
    msgSpan.classList.add("no-tasks")
    let msgText = document.createTextNode("No Tasks To Show");

    msgSpan.appendChild(msgText);
    tasksContainer.appendChild(msgSpan)
}

function calculate() {
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;

}
let id = 0, editId = 0;
let toDoInput = document.getElementsByClassName('to-do-list')[0];
function modal(operation) {
    let modalDis = document.getElementById('input-container');
    console.log(modalDis)
    modalDis.classList.toggle("show");
    console.log("Clicked");
    let button = document.getElementById("add-button");

    if (operation === "add") {
        button.innerText = "Add Task";
        clearInputBox();
    }


    else
        button.innerText = "Edit Task";
}


function hideModal() {

    let modalview = document.getElementsByClassName("input-container")[0];

    modalview.classList.toggle("show");
}

function addTask() {
    let button = document.getElementById("add-button");

    let inputElem = document.getElementById("to-do-input");
    let dateElem = document.getElementById("date-input");
    let discElem = document.getElementById("discription-input");

    let inputText = inputElem.value.trim();
    let inputDate = dateElem.value.trim();
    let inputDisc = discElem.value.trim();

    if (inputText.length === 0) {
        alert("must have to fill the details")
    }
    else if (inputDate.length === 0) {
        alert("must have to fill the details")
    }
    else if (inputDisc.length === 0) {
        alert("must have to fill the details")
    }
    else {
        clear()

        if (button.innerText === "Edit Task") {
            let editTask = document.getElementById("task-" + editId);
            let editDate = document.getElementById("date-" + editId);
            let editDiscription = document.getElementById("discription-" + editId);

            editTask.innerText = inputText;
            editDate.innerText = inputDate;
            editDiscription.innerText = inputDisc;
            hideModal();

        }
        else {


            id++;

            let toDoList = document.getElementsByClassName("to-do-list")[0];


            console.log(inputDate);

            toDoList.insertAdjacentHTML("beforeend",



                `
<div class="to-do-item" id="l-`+ id + `" >
<div>
<p class="to-do-text">
<span class="task-heading">Task `+ id + `: </span>  
<span id="task-`+ id + `"> ` + " " + inputText + `</span>
</p>
<p id="date-`+ id + `" class="to-do-date">` + " " + inputDate + `
</p>
</div>
<div>
<p class="to-do-discription">
<span class="task-heading">
    Discription:</span>
    
   <span id="discription-`+ id + `" > ` + " " + inputDisc + `
</span>
</p>
<div class="task-button">
<input type="button"  class="delete-button" value="Delete" onclick="deleteThis('l-`+ id + `')"> 
<input  type="button" class="edit-button" value="Edit" onclick="editThis('l-`+ id + `')"> 
<hr>
</div>
</div>
</div>
`
            );
            hideModal();
        }
    }

}

function clear() {
    let inputElem = document.getElementById("to-do-input");
    let dateElem = document.getElementById("date-input");
    let discElem = document.getElementById("discription-input");

    let inputText = inputElem.value.trim();
    let inputDate = dateElem.value.trim();
    let inputDisc = discElem.value.trim();

    inputElem.value = " ";
    dateElem.value = " ";
    discElem.value = " ";

}


function deleteThis(elem) {
    if (confirm("you really want to delete this")) {
        let targetElem = document.getElementById(elem);
        targetElem.remove();
    }
}
function editThis(elem) {

    let button = document.getElementById("add-button");

    button.innerText = "Edit Task";

    let inputTask = document.getElementById("to-do-input");
    let inputDate = document.getElementById("date-input");
    let inputDiscription = document.getElementById("discription-input");

    editId = elem.slice(-1);

    let parentElem = document.getElementById(elem);
    let editTask = document.getElementById("task-" + editId);
    let editDate = document.getElementById("date-" + editId);
    let editDiscription = document.getElementById("discription-" + editId);



    console.log(editDate.innerText);
    inputTask.value = editTask.innerText;
    inputDate.value = editDate.innerText;
    inputDiscription.value = editDiscription.innerText;



    modal("edit");
}
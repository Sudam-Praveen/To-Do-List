const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == '') {
        alert('You must write something')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)

        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();
    }
}
//adding a close function and text select line through

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//saving data when click da button
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//nothing happen when refresh or restart the web page
function  showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
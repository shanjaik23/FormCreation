var form = document.getElementById("employeeForm");
var section = document.getElementsByClassName("Section")[0];
var homePage = document.getElementById("home-page");
var tableContainer = document.getElementById("tableContainer");
var tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
var task = document.getElementsByClassName("task-todo-list")[0];

task.style.display = "none";
section.style.display = "none";
tableContainer.style.display = "none";

function addEmployee() {
  console.log("Add Employee triggered");

  if (!validateForm()) {
    console.log("validation failed");
    return;
  }

  var name = form.elements["name"].value.trim();
  var email = form.elements["email"].value.trim();
  var age = parseInt(form.elements["age"].value.trim());
  var hobbies = [];
  var hobbyCheckboxes = form.querySelectorAll('input[name="hobbies"]');
  for (var i = 0; i < hobbyCheckboxes.length; i++) {
    if (hobbyCheckboxes[i].checked) {
      hobbies += hobbyCheckboxes[i].value + ", ";
    }
  }
  hobbies = hobbies.slice(0, -2);
  var genderRadio = form.querySelector('input[name="gender"]:checked');
  var gender = genderRadio ? genderRadio.value : "";

  var city = form.elements["city"].value;
  var state = form.elements["state"].value;
  var about = form.elements["about"].value.trim();
  var newRow = tableBody.insertRow();
  var data = [name, email, age, hobbies, city, state, gender, about];
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var cell = newRow.insertCell();
    cell.textContent = data[i];
  }
  
  form.reset();
  console.log("Form reset");
}

  
  /* reset(name, email, age, gender, city, state, hobbies, about);
  console.log("Form reset");
}
function reset(name, email, age, gender, city, state, hobbies, about) {
  name = null;
  email = null;
  age = null;
  gender = null;
  city = null;
  state = null;
  hobbies = null;
  about = null;
} */

function validateForm() {
  console.log("Validating form");

  var name = form.elements["name"].value.trim();
  var email = form.elements["email"].value.trim();
  var age = form.elements["age"].value.trim();
  var gender = form.querySelector('input[name="gender"]:checked');
  var city = form.elements["city"].value;
  var state = form.elements["state"].value;
  var hobbies = form.querySelectorAll('input[name="hobbies"]:checked');
  var about = form.elements["about"].value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (age === "" || isNaN(age)) {
    alert("Please enter a valid age.");
    return false;
  }

  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

  if (hobbies.length === 0) {
    alert("Please select at least one hobby.");
    return false;
  }

  if (city === "") {
    alert("Please select your city.");
    return false;
  }

  if (state === "") {
    alert("Please select your state.");
    return false;
  }

  if (about === "") {
    alert("Please fill about yourself.");
    return false;
  }

  console.log("Form validation passed");
  return true;
}

function addEmp() {
  console.log("Add Employee Section");
  homePage.style.display = "none";
  tableContainer.style.display = "none";
  section.style.display = "flex";
}

function resetBtnn() {
  console.log("Reset Employee Table");
  form.reset();
  /*tableBody.innerHTML = "";
  tableContainer.style.display = "none"; */
}

function showEmpList() {
  console.log("Employee List");
  homePage.style.display = "none";
  section.style.display = "none";
  tableContainer.style.display = "block";
}

function showtasklist() {
  console.log("Task List");
  homePage.style.display = "none";
  section.style.display = "none";
  tableContainer.style.display = "none";
  task.style.display = "block";
}



function addTask() {
  console.log("Add Task function");
  var taskCount = 1;
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  var taskCount= taskCount++;
  var tableBody = document.getElementById("task-TBody");
  var rows = tableBody.rows;
  taskCount = rows.length + 1;
  
  var newRow = tableBody.insertRow();

  var autonum = newRow.insertCell();
  autonum.textContent = taskCount;
  console.log("Task number:", taskCount);


  var complete = newRow.insertCell();
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  complete.appendChild(checkbox);


  var taskCell = newRow.insertCell();
  var text = document.createElement("span");
  text.textContent = taskText;
  text.className = "task-text";
  taskCell.appendChild(text);
  console.log("Task added:", taskText);

  var actionsCell = newRow.insertCell();

  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    var newTask = prompt("Edit your task:", text.textContent);
     text.textContent = newTask.trim();
  };

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "8px";
  deleteBtn.onclick = function () {
    newRow.remove();
    
    console.log("Task deleted");
  };

  actionsCell.appendChild(editBtn);
  actionsCell.appendChild(deleteBtn);

  input.value = "";
  console.log("Task input cleared");
}



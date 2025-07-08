var form = document.getElementById("employeeForm");
var section = document.getElementsByClassName("Section")[0];
var cart = document.getElementsByClassName("add-to-cart")[0];
var homePage = document.getElementById("home-page");
var tableContainer = document.getElementById("tableContainer");
var tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
var task = document.getElementsByClassName("task-todo-list")[0];

cart.style.display = "none";
task.style.display = "none";
section.style.display = "none";
tableContainer.style.display = "none";

function showError(fieldName, message) {
  const input = form.elements[fieldName];
  if (input && typeof input.classList !== "undefined") {
    input.classList.add("input-error");
  }

  const errorSpan = document.getElementById("error-" + fieldName);
  if (errorSpan) {
    errorSpan.textContent = message;
  }
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(e => e.textContent = "");

  const inputs = form.querySelectorAll(".input-error");
  inputs.forEach(input => input.classList.remove("input-error"));
}

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
  clearErrors();
  var isValid = true;
  var name = form.elements["name"].value.trim();
  var email = form.elements["email"].value.trim();
  var age = form.elements["age"].value.trim();
  var gender = form.querySelector('input[name="gender"]:checked');
  var city = form.elements["city"].value;
  var state = form.elements["state"].value;
  var hobbies = form.querySelectorAll('input[name="hobbies"]:checked');
  var about = form.elements["about"].value.trim();

  if (name === "") {
    showError("name", "Please enter your name.");
     isValid = false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    showError("email","Please enter a valid email address.");
    isValid = false;
  }

  if (age === "" || isNaN(age)) {
    showError("age","Please enter a valid age.");
     isValid = false;
  }

  if (!gender) {
    showError("gender","Please select your gender.");
     isValid = false;
  }

  if (hobbies.length === 0) {
    showError("hobbies","Please select at least one hobby.");
     isValid = false;
  }

  if (city === "") {
    showError("city","Please select your city.");
     isValid = false;
  }

  if (state === "") {
    showError("state","Please select your state.");
     isValid = false;
  }

  if (about === "") {
    showError("about","Please fill about yourself.");
     isValid = false;
  }

  console.log("Form validation passed");
  return isValid;
}

function addEmp() {
  console.log("Add Employee Section");
  homePage.style.display = "none";
  tableContainer.style.display = "none";
  cart.style.display = "none";
   task.style.display = "none";
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
  cart.style.display = "none";
   task.style.display = "none";
  tableContainer.style.display = "block";
}

function showtasklist() {
  console.log("Task List");
  homePage.style.display = "none";
  section.style.display = "none";
  tableContainer.style.display = "none";
  cart.style.display = "none";
  task.style.display = "block";
}


var taskBeingEdited = null; 

function addTask() {
  console.log("Add Task function");
  var taskCount = 1;
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  if (taskBeingEdited) {
    taskBeingEdited.textContent = taskText;
    taskBeingEdited = null;
    input.value = "";
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
    /*var newTask = prompt("Edit your task:", text.textContent);
     text.textContent = newTask.trim(); */
    document.getElementById("taskInput").value = text.textContent;
    taskBeingEdited = text;
  };

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "8px";
  deleteBtn.style.setProperty("background-color", "#2E7D32", "important");
  deleteBtn.style.setProperty("color", "white", "important");

  
  deleteBtn.onclick = function () {
    newRow.remove();
    
    console.log("Task deleted");
  };

  actionsCell.appendChild(editBtn);
  actionsCell.appendChild(deleteBtn);

  input.value = "";
  console.log("Task input cleared");
}

function showproductlist() {
  console.log("Add to Cart");
  cart.style.display = "block";
  homePage.style.display = "none";
  task.style.display = "none";
  section.style.display = "none";
  tableContainer.style.display = "none";
}

const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
      const info = card.getAttribute("data-info");
      if (info.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
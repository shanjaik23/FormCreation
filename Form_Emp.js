var form = document.getElementById("employeeForm");
var tableContainer = document.getElementById("tableContainer");
var tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
var resetBtn = document.getElementById("resetBtn");
var empListBtn = document.querySelector(".nav-links a[alt='Emp']"); // Emp List button

function addEmployee() {
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var age = parseInt(form.elements["age"].value);
  var hobbies = "";
  var hobbyCheckboxes = form.querySelectorAll('input[name="hobbies"]');
  for (var i = 0; i < hobbyCheckboxes.length; i++) {
    if (hobbyCheckboxes[i].checked) {
      hobbies += hobbyCheckboxes[i].value + ", ";
    }
  }
  hobbies = hobbies.slice(0, -2);
  var gender = form.querySelectorAll('input[name="gender"]');
  var city = form.elements["city"].value;
  var state = form.elements["state"].value;
  var about = form.elements["about"].value;
  var newRow = tableBody.insertRow();
  var data = [name, email, age, hobbies, city, state, gender, about];
  for (var i = 0; i < data.length; i++) {
    var cell = newRow.insertCell();
    cell.textContent = data[i];
  }
  form.reset();
}

function resetTable() {
  tableBody.innerHTML = "";
  tableContainer.style.display = "none";
}

function showEmpList() {
  tableContainer.style.display = "block";
}

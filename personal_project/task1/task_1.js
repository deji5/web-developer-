document.addEventListener("DOMContentLoaded", loadStudents);

const form = document.getElementById("studentForm");
const studentBody = document.getElementById("studentBody");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const studentClass = document.getElementById("class").value.trim();
  const image = document.getElementById("image").value.trim();
  const score1 = Number(document.getElementById("score1").value);
  const score2 = Number(document.getElementById("score2").value);
  const score3 = Number(document.getElementById("score3").value);

  const avg = ((score1 + score2 + score3) / 3).toFixed(2);
  const performance = getPerformance(avg);

  const student = { name, age, studentClass, image, avg, performance };

  addStudentToTable(student);
  saveStudent(student);
  form.reset();
});

search.addEventListener("keyup", filterStudents);

function getPerformance(avg) {
  if (avg >= 75) return "Excellent";
  if (avg >= 50) return "Good";
  return "Needs Help";
}

function addStudentToTable(student) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${student.image}" alt="${student.name}"></td>
    <td>${student.name}</td>
    <td>${student.studentClass}</td>
    <td>${student.avg}</td>
    <td><span class="performance ${getPerformanceClass(student.performance)}">${student.performance}</span></td>
    <td><button class="delete-btn">Delete</button></td>
  `;
  studentBody.appendChild(row);

  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
    deleteStudent(student.name);
  });
}~~~

function getPerformanceClass(perf) {
  if (perf === "Excellent") return "excellent";
  if (perf === "Good") return "good";
  return "needs-help";
}

function saveStudent(student) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
}

function loadStudents() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.forEach(addStudentToTable);
}

function deleteStudent(name) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students = students.filter((s) => s.name !== name);
  localStorage.setItem("students", JSON.stringify(students));
}

function filterStudents(e) {
  const text = e.target.value.toLowerCase();
  const rows = studentBody.getElementsByTagName("tr");
  Array.from(rows).forEach((row) => {
    const name = row.cells[1].textContent.toLowerCase();
    row.style.display = name.includes(text) ? "" : "none";
  });
}


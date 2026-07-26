let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
let editIndex = null;

const form = document.getElementById("complaintForm");
const input = document.getElementById("complaintInput");
const list = document.getElementById("complaintList");

function saveComplaints() {
  localStorage.setItem("complaints", JSON.stringify(complaints));
}

function renderComplaints() {
  list.innerHTML = "";

  complaints.forEach((complaint, index) => {
    const div = document.createElement("div");
    div.className = "complaint-card";
    div.innerHTML = `
      <p>${complaint}</p>
      <button onclick="editComplaint(${index})">Edit</button>
      <button onclick="deleteComplaint(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function editComplaint(index) {
  input.value = complaints[index];
  editIndex = index;
}

function deleteComplaint(index) {
  complaints.splice(index, 1);
  saveComplaints();
  renderComplaints();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const complaintText = input.value.trim();
  if (complaintText === "") return;

  if (editIndex !== null) {
    complaints[editIndex] = complaintText;
    editIndex = null;
  } else {
    complaints.push(complaintText);
  }

  saveComplaints();
  renderComplaints();
  form.reset();
});

renderComplaints();

let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
let editIndex = -1;

const titleInput = document.getElementById("title");
const detailsInput = document.getElementById("details");
const categoryInput = document.getElementById("category");
const list = document.getElementById("complaintList");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

function saveComplaints() {
  localStorage.setItem("complaints", JSON.stringify(complaints));
}

function renderComplaints() {
  list.innerHTML = "";

  complaints.forEach((complaint, index) => {
    const div = document.createElement("div");
    div.className = "complaint-card";
    div.innerHTML = `
      <h3>${complaint.title}</h3>
      <p><strong>Category:</strong> ${complaint.category}</p>
      <p>${complaint.details}</p>
      <button type="button" onclick="editComplaint(${index})">Edit</button>
      <button type="button" onclick="deleteComplaint(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function submitComplaint() {
  const title = titleInput.value.trim();
  const details = detailsInput.value.trim();
  const category = categoryInput.value;

  if (title === "" || details === "") return;

  complaints.push({ title, details, category });
  saveComplaints();
  renderComplaints();
  clearForm();
}

function editComplaint(index) {
  editIndex = index;
  titleInput.value = complaints[index].title;
  detailsInput.value = complaints[index].details;
  categoryInput.value = complaints[index].category;
  submitBtn.style.display = "none";
  updateBtn.style.display = "inline-block";
}

function updateComplaint() {
  const title = titleInput.value.trim();
  const details = detailsInput.value.trim();
  const category = categoryInput.value;

  if (editIndex === -1 || title === "" || details === "") return;

  complaints[editIndex] = { title, details, category };
  saveComplaints();
  renderComplaints();
  clearForm();
}

function deleteComplaint(index) {
  complaints.splice(index, 1);
  saveComplaints();
  renderComplaints();

  if (editIndex === index) {
    clearForm();
  }
}

function clearForm() {
  titleInput.value = "";
  detailsInput.value = "";
  categoryInput.selectedIndex = 0;
  editIndex = -1;
  submitBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
}

submitBtn.addEventListener("click", submitComplaint);
updateBtn.addEventListener("click", updateComplaint);

renderComplaints();

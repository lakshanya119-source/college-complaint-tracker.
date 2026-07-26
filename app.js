let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

function saveComplaints() {
  localStorage.setItem("complaints", JSON.stringify(complaints));
}

function renderComplaints() {
  const list = document.getElementById("complaintList");
  list.innerHTML = "";

  complaints.forEach((complaint, index) => {
    const div = document.createElement("div");
    div.className = "complaint-card";
    div.innerHTML = `
      <h3>${complaint.title}</h3>
      <p><strong>Category:</strong> ${complaint.category}</p>
      <p>${complaint.details}</p>
      <button type="button" onclick="deleteComplaint(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function submitComplaint() {
  const titleInput = document.getElementById("title");
  const detailsInput = document.getElementById("details");
  const categoryInput = document.getElementById("category");

  const title = titleInput.value.trim();
  const details = detailsInput.value.trim();
  const category = categoryInput.value;

  if (title === "" || details === "") return;

  complaints.push({ title, details, category });
  saveComplaints();
  renderComplaints();

  titleInput.value = "";
  detailsInput.value = "";
  categoryInput.selectedIndex = 0;
}

function deleteComplaint(index) {
  complaints.splice(index, 1);
  saveComplaints();
  renderComplaints();
}

renderComplaints();

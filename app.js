let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

function saveComplaints() {
  localStorage.setItem("complaints", JSON.stringify(complaints));
}

function renderComplaints() {
  const list = document.getElementById("complaintList");
  list.innerHTML = complaints.map((c, index) => `
    <div class="complaint-box">
      <h3>${index + 1}. ${c.title}</h3>
      <p><strong>Category:</strong> ${c.category}</p>
      <p><strong>Details:</strong> ${c.details}</p>
      <p><strong>Status:</strong> ${c.status}</p>
      <button onclick="deleteComplaint(${index})">Delete</button>
    </div>
  `).join("");
}

function submitComplaint() {
  const title = document.getElementById("title").value.trim();
  const details = document.getElementById("details").value.trim();
  const category = document.getElementById("category").value;

  if (!title || !details) {
    alert("Please fill all fields");
    return;
  }

  complaints.push({
    title,
    details,
    category,
    status: "Pending"
  });

  saveComplaints();
  renderComplaints();

  document.getElementById("title").value = "";
  document.getElementById("details").value = "";
  document.getElementById("category").value = "Hostel";
}

function deleteComplaint(index) {
  complaints.splice(index, 1);
  saveComplaints();
  renderComplaints();
}

renderComplaints();

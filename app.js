let complaints = [];

function loginStudent() {
  alert("Login clicked. We will connect Firebase later.");
}

function submitComplaint() {
  const title = document.getElementById("title").value;
  const details = document.getElementById("details").value;
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

  renderComplaints();

  document.getElementById("title").value = "";
  document.getElementById("details").value = "";
}

function renderComplaints() {
  const list = document.getElementById("complaintList");

  list.innerHTML = complaints.map(c => `
    <div style="border:1px solid #ddd;padding:10px;margin-top:10px;">
      <b>${c.title}</b><br>
      ${c.details}<br>
      Category: ${c.category}<br>
      Status: ${c.status}
    </div>
  `).join("");
}

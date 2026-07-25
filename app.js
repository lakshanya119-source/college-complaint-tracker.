let complaints = [];

function submitComplaint() {
  const title = document.getElementById("title").value.trim();
  const details = document.getElementById("details").value.trim();
  const category = document.getElementById("category").value;
  const list = document.getElementById("complaintList");

  if (!title || !details) {
    alert("Please fill all fields");
    return;
  }

  const complaint = {
    title,
    details,
    category,
    status: "Pending"
  };

  complaints.push(complaint);

  list.innerHTML = complaints.map((c, index) => `
    <div class="complaint-box">
      <h3>${index + 1}. ${c.title}</h3>
      <p><strong>Category:</strong> ${c.category}</p>
      <p><strong>Details:</strong> ${c.details}</p>
      <p><strong>Status:</strong> ${c.status}</p>
    </div>
  `).join("");

  document.getElementById("title").value = "";
  document.getElementById("details").value = "";
  document.getElementById("category").value = "Hostel";
}

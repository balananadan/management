const salesReps = ["Alice", "Bob", "Charlie"];
let currentRepIndex = 0;

document.getElementById("leadForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comments = document.getElementById("comments").value.trim();

  if (!name || !email) {
    alert("Please complete all required fields.");
    return;
  }


  const assignedRep = salesReps[currentRepIndex];
  currentRepIndex = (currentRepIndex + 1) % salesReps.length;

  
  const keywords = comments.match(/\b(\w+)\b/g)?.slice(0, 3).join(", ") || "No Keywords";

  
  const followUpDate = new Date();
  followUpDate.setDate(followUpDate.getDate() + 2);

  
  const leadList = document.getElementById("leadList");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${keywords}</td>
    <td>${assignedRep}</td>
    <td>${followUpDate.toLocaleDateString()}</td>
  `;
  leadList.appendChild(row);

  // Reset the form
  document.getElementById("leadForm").reset();
});
document.getElementById("leadForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const budget = parseFloat(document.getElementById("budget").value.trim());
    const timeZone = document.getElementById("timeZone").value;
  
    if (!name || !email || isNaN(budget)) {
      alert("Please complete all fields.");
      return;
    }
  
    // logic
    let score = 0;
    if (budget > 5000) score += 10;
  
    // Time-zone 
    const currentTime = new Date();
    const leadTime = new Date(currentTime.getTime() + timeZone * 3600 * 1000);
  
    // Display 
    const output = document.getElementById("output");
    output.innerHTML = `
      <p><strong>Lead Details:</strong></p>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Budget: $${budget}</p>
      <p>Score: ${score}</p>
      <p>Follow-up Time (Your Time): ${leadTime.toLocaleString()}</p>
    `;
    output.style.display = "block";
  });
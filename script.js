

document.getElementById("submitBtn").addEventListener("click", () => {
   
    const companySize = parseInt(document.getElementById("companySize").value);
    const budget = parseInt(document.getElementById("budget").value);
    const industry = parseInt(document.getElementById("industry").value);
    const urgency = parseInt(document.getElementById("urgency").value);
  
    const leadScore = companySize + budget + industry + urgency;
  
   
    let message = `Lead Score: ${leadScore} - `;
    if (leadScore > 70) {
      message += "High-Quality Lead. Send a welcome email!";
    } else {
      message += "Nurture Lead. Add to the nurture campaign.";
    }
  
   
    document.getElementById("result").innerHTML = message;
  
    
    const leadData = {
      companySize,
      budget,
      industry,
      urgency,
      leadScore,
    };
    console.log("Lead Data:", leadData);
  
    
  });
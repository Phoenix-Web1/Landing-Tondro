// Function to create footer
function createFooter() {
    // Create footer element
    let footer = document.createElement("footer");
    footer.id = "flexibleFooter";
  
    // Create footer content container
    let footerContent = document.createElement("div");
    footerContent.id = "footerContent";
  
    footer.appendChild(footerContent);
    document.body.appendChild(footer);
  }
  
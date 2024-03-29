// Function to create footer
function createFooter() {
  // Create footer element
  let footer = document.createElement("footer");
  footer.id = "flexibleFooter";

  // Create footer content container
  let footerContent = document.createElement("div");
  footerContent.id = "footerContent";

  // Append footer content container to footer
  footer.appendChild(footerContent);

  // Append footer to body
  document.body.appendChild(footer);
}

// Call function to create footer
createFooter();

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
  
    // Additional block with images
    let imageBlock = document.createElement("div");
    imageBlock.classList.add("image-block");
  
    // Function to add image
    function addImage(imageSrc, altText) {
      let image = document.createElement("img");
      image.src = imageSrc;
      image.alt = altText;
      imageBlock.appendChild(image);
    }
  
    // Adding images
    addImage("image1-url.jpg", "Image 1");
    addImage("image2-url.jpg", "Image 2");
    addImage("image3-url.jpg", "Image 3");
    // Add more images as needed
  
    // Append image block to footer
    footer.appendChild(imageBlock);
  
    // Add footer text below image block
    let footerText = document.createElement("div");
    footerText.classList.add("footer-text");
    footerText.textContent = "تمامی حقوق مادی و معنوی این وبسایت متعلق به تنرو است.";
    footer.appendChild(footerText);
  
    // Append footer to body
    document.body.appendChild(footer);
  }
  
  // Call function to create footer
  createFooter();
  
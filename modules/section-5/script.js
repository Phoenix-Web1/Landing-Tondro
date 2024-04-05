// Function to create horizontal scrolling container with images and links
function createScrollingContainer() {
  // Create main container
  const scrollContainer = document.createElement("div");
  scrollContainer.classList.add("scroll-container");

  // Create wrapper for scroll
  const scrollWrapper = document.createElement("div");
  scrollWrapper.classList.add("scroll-wrapper");

  // Create content container
  const scrollContent = document.createElement("div");
  scrollContent.classList.add("scroll-content");

  // Image URLs and Links
  const images = [
    { url: "/media/brand.png", link: "image1_link", alt: "Image 1" },
    { url: "/media/brand2.png", link: "image2_link", alt: "Image 2" },
    { url: "/media/brand3.png", link: "image3_link", alt: "Image 3" },
    { url: "/media/brand4.png", link: "image4_link", alt: "Image 4" },
    { url: "/media/brand5.png", link: "image4_link", alt: "Image 5" },
    { url: "/media/brand6.png", link: "image4_link", alt: "Image 6" },
    { url: "/media/brand7.png", link: "image4_link", alt: "Image 7" },
  ];

  // Append images to content container
  images.forEach((imageData) => {
    const link = document.createElement("a");
    link.href = imageData.link;

    const img = document.createElement("img");
    img.src = imageData.url;
    img.alt = imageData.alt;

    link.appendChild(img);
    scrollContent.appendChild(link);
  });

  // Append content to wrapper
  scrollWrapper.appendChild(scrollContent);

  // Append wrapper to main container
  scrollContainer.appendChild(scrollWrapper);

  // Append container to the document body
  document.body.appendChild(scrollContainer);

  // Enable smooth scrolling
  enableSmoothScrolling(scrollContainer);
}

// Function to enable smooth scrolling
function enableSmoothScrolling(container) {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  });
  container.addEventListener("mouseleave", () => {
    isDown = false;
  });
  container.addEventListener("mouseup", () => {
    isDown = false;
  });
  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed if needed
    container.scrollLeft = scrollLeft - walk;
  });

  // Enable smooth scroll with mouse wheel
  container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  });
}

// Call the function to create the scrolling container
createScrollingContainer();

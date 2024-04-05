export function createSection5() {
  // Create the fixed header
  const header = document.createElement("h1");
  header.textContent = "چه برند هایی به ما اعتماد کردند؟";
  header.classList.add("fixed-header");
  header.style.textAlign = "center";
  document.body.appendChild(header);

  // Function to create horizontal scrolling container with images and links
  function createScrollingContainer() {
    // Create main container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create scroll container
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

    // Append wrapper to scroll container
    scrollContainer.appendChild(scrollWrapper);

    // Append scroll container to main container
    container.appendChild(scrollContainer);

    // Append container to the document body
    document.body.appendChild(container);

    // Enable smooth scrolling
    enableSmoothScrolling(scrollContainer);
  }

  // Function to enable smooth scrolling
  function enableSmoothScrolling(container) {
    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    });
  }

  // Call the function to create the scrolling container
  createScrollingContainer();
}

// Function to create horizontal scrolling container with images and links
function createScrollingContainer() {
  // Create main container
  const scrollContainer = document.createElement('div');
  scrollContainer.classList.add('scroll-container');

  // Create wrapper for scroll
  const scrollWrapper = document.createElement('div');
  scrollWrapper.classList.add('scroll-wrapper');

  // Create content container
  const scrollContent = document.createElement('div');
  scrollContent.classList.add('scroll-content');

  // Image URLs and Links
  const images = [
    { url: '/media/brand.png', link: 'image1_link', alt: 'Image 1' },
    { url: '/media/brand.png', link: 'image2_link', alt: 'Image 2' },
    { url: '/media/brand.png', link: 'image3_link', alt: 'Image 3' },
    { url: '/media/brand.png', link: 'image4_link', alt: 'Image 4' },
    { url: '/media/brand.png', link: 'image5_link', alt: 'Image 5' },
    { url: '/media/brand.png', link: 'image6_link', alt: 'Image 6' }
  ];

  // Append images to content container
  images.forEach(imageData => {
    const link = document.createElement('a');
    link.href = imageData.link;

    const img = document.createElement('img');
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
}

// Call the function to create the scrolling container
createScrollingContainer();

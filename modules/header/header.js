// Function to create dynamic buttons
export function createDynamicButton(text) {
  const dynamicButton = document.createElement("button");
  dynamicButton.textContent = text; // Set button text
  dynamicButton.classList.add("dynamicButton"); // Add class for styling
  return dynamicButton; // Return the created button
}

// Function to create header
export function createHeader() {
  const header = document.createElement("header");
  header.id = "mainHeader"; // Set header ID

  // Create dynamic button element for login/register
  const dynamicButton = createDynamicButton("ورود/ثبت نام"); // Create dynamic button with specified text
  header.appendChild(dynamicButton); // Append dynamic button to header

  // Create toggle button element for menu
  const toggleNavButton = document.createElement("button");
  toggleNavButton.id = "toggleNav"; // Set button ID

  // Create image element for the menu icon
  const menuIconImg = document.createElement("img");
  menuIconImg.src = "/media/menu.png"; // Set image source
  menuIconImg.alt = "Menu"; // Set alt text for accessibility
  menuIconImg.style.backgroundColor = "transparent"; // Set background color to transparent
  toggleNavButton.appendChild(menuIconImg); // Append image to toggle button

  // Append toggle button to header
  header.appendChild(toggleNavButton); // Append toggle button to header

  // Create navigation element
  const nav = document.createElement("nav");
  nav.id = "mainNav"; // Set navigation ID

  // Create logo container
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container"); // Add class for styling

  // Create logo image
  const logoImg = document.createElement("img");
  logoImg.src = "/media/tonrow-logo.png"; // Set image source
  logoImg.alt = "Logo"; // Set image alt text
  logoContainer.appendChild(logoImg); // Append logo image to logo container

  // Append logo container to navigation
  nav.appendChild(logoContainer);

  // Create ul element for menu items
  const ul = document.createElement("ul");
  ul.id = "menuItems"; // Set ul ID

  // Array of menu items
  const menuItems = [
      "خانه",
      "درخواست خرید",
      "درخواست سفیر",
      "درباره ما",
      "قوانین",
  ];

  // Create list items and anchor tags dynamically for each menu item
  menuItems.forEach((item) => {
      const li = document.createElement("li"); // Create list item
      const a = document.createElement("a"); // Create anchor tag
      a.href = "#"; // Set href attribute
      a.textContent = item; // Set anchor text
      li.appendChild(a); // Append anchor tag to list item
      ul.appendChild(li); // Append list item to ul
  });

  // Append navigation to header
  header.appendChild(nav); // Append navigation to header
  nav.appendChild(ul); // Append ul to navigation

  // Append header to body
  document.body.appendChild(header); // Append header to body

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.id = "overlay"; // Set overlay ID

  // Append overlay to body
  document.body.appendChild(overlay); // Append overlay to body

  // Toggle navigation visibility on button click
  toggleNavButton.addEventListener("click", function () {
      nav.classList.toggle("open"); // Toggle 'open' class for navigation
      overlay.style.display = nav.classList.contains("open") ? "block" : "none"; // Toggle display of overlay
  });

  // Close navigation when clicking outside of it
  document.addEventListener("click", function (event) {
      const nav = document.getElementById("mainNav"); // Get navigation element
      const toggleNavButton = document.getElementById("toggleNav"); // Get toggle button element
      if (
          !nav.contains(event.target) && // Check if click is outside navigation
          event.target !== toggleNavButton && // Check if click is not on toggle button
          nav.classList.contains("open") // Check if navigation is open
      ) {
          nav.classList.remove("open"); // Remove 'open' class from navigation
          overlay.style.display = "none"; // Hide overlay
      }
  });
}
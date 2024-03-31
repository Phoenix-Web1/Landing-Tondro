// Execute when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to create dynamic buttons
  function createDynamicButton(text) {
    const dynamicButton = document.createElement("button");
    dynamicButton.textContent = text;
    dynamicButton.classList.add("dynamicButton");
    return dynamicButton;
  }

  // Create header element
  const header = document.createElement("header");
  header.id = "mainHeader";

  // Create dynamic button element for login/register
  const dynamicButton = createDynamicButton("ورود/ثبت نام");
  header.appendChild(dynamicButton);

  // Create toggle button element for menu
  const toggleNavButton = document.createElement("button");
  toggleNavButton.textContent = "Menu";
  toggleNavButton.id = "toggleNav";
  header.appendChild(toggleNavButton);

  // Create navigation element
  const nav = document.createElement("nav");
  nav.id = "mainNav";

  // Create logo container
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  // Create logo image
  const logoImg = document.createElement("img");
  logoImg.src = "/media/tonrow-logo.png";
  logoImg.alt = "Logo";
  logoContainer.appendChild(logoImg);

  // Append logo container to navigation
  nav.appendChild(logoContainer);

  // Create ul element for menu items
  const ul = document.createElement("ul");
  ul.id = "menuItems";

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
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
  });

  // Append navigation to header
  header.appendChild(nav);
  nav.appendChild(ul);

  // Append header to body
  document.body.appendChild(header);

  // Toggle navigation visibility on button click
  toggleNavButton.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  // Close navigation when clicking outside of it
  document.addEventListener("click", function (event) {
    const nav = document.getElementById("mainNav");
    const toggleNavButton = document.getElementById("toggleNav");
    if (
      !nav.contains(event.target) &&
      event.target !== toggleNavButton &&
      nav.classList.contains("open")
    ) {
      nav.classList.remove("open");
    }
  });
});

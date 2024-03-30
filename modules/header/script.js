document.addEventListener("DOMContentLoaded", function () {
  function createDynamicButton(text) {
    const dynamicButton = document.createElement("button");
    dynamicButton.textContent = text;
    dynamicButton.classList.add("dynamicButton");
    return dynamicButton;
  }

  // Create header element
  const header = document.createElement("header");
  header.id = "mainHeader";

  // Create dynamic button element
  const dynamicButton = createDynamicButton("ورود/ثبت نام");
  header.appendChild(dynamicButton);

  // Create toggle button element
  const toggleNavButton = document.createElement("button");
  toggleNavButton.textContent = "Menu";
  toggleNavButton.id = "toggleNav";
  header.appendChild(toggleNavButton);

  // Create navigation element
  const nav = document.createElement("nav");
  nav.id = "mainNav";

  // Create ul element
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

  // Create list items and anchor tags dynamically
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
    nav.classList.toggle("show");
  });
});

function createDynamicElement(tagName, attributes, textContent, children) {
  var element = document.createElement(tagName);

  if (attributes) {
    for (var attribute in attributes) {
      if (attributes.hasOwnProperty(attribute)) {
        element.setAttribute(attribute, attributes[attribute]);
      }
    }
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (children) {
    for (var i = 0; i < children.length; i++) {
      element.appendChild(children[i]);
    }
  }

  return element;
}

// create section1
var section = createDynamicElement("section", { id: "hero-banner-section" }, null, [

  // create section1 container
  // start of section1 container
  createDynamicElement("div", { class: "hero-banner-container" }, null, [
    // create hero-banner-background
    // start of banner background
    createDynamicElement("div", { class: "hero-banner-background" }, null, [
      createDynamicElement("img", { src: "./media/hero.png", alt: "Hero Image" }),
      createDynamicElement("img", { src: "./media/Logotype.png", alt: "Logotype Image" }),
      createDynamicElement("img", { src: "./media/arrow.svg", alt: "" }),
      createDynamicElement("img", { src: "./media/shadow.png", alt: "" })
    ]),
    createDynamicElement("img", { class: "subtract", src: "./media/Subtract (1).png", alt: "Subtract Image" }),
  ]),
  createDynamicElement("img", { class: "subtract-des", src: "./media/Subtract-desktop.svg", alt: "Subtract Image" }),
   // end of section1 container
  //  ------------------------
  createDynamicElement("div", { class: "hero-description" }, null, [
    createDynamicElement("h1", null, "سامانه تنرو"),
    createDynamicElement("span", null, "دریافت سریع خدمات حمل و نقل و انجام کار با 5 سال سابقه کار با بزرگترین فروشگاه ها و سازمان های بوشهر"),
    createDynamicElement("button", null, "درخواست سفیر")
  ]),
  createDynamicElement("img", { class: "guide-flash", src: "./media/Vector 4.svg", alt: "" })
]);

document.body.appendChild(section);
console.log(section)

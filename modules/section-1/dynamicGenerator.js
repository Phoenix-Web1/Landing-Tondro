function createDynamicElement(tagName, attributes, textContent, children) {

    var element = document.createElement(tagName);

    if (attributes) {
        for (var key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
    }

    if (textContent) {
        var textNode = document.createTextNode(textContent);
        element.appendChild(textNode);
    }


    if (children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          if (child instanceof HTMLElement) {
            element.appendChild(child);
          } else if (Array.isArray(child)) {
            var nestedElement = createDynamicElement.apply(null, child);
            element.appendChild(nestedElement);
          }
        }
      }

      return element;
}

// create section1
let section = createDynamicElement('section',{id: "hero-banner-section"} , [
    
  // create section1 container
    createDynamicElement('div',{id :'hero-banner-container'},null,[
      createDynamicElement("div", { class: "hero-banner-background" }, null, [
        createDynamicElement("img", { src: "section-1-images/hero.png", alt: "Hero Image" }),
        createDynamicElement("img", { src: "section-1-images/Logotype.png", alt: "Logotype Image" }),
        createDynamicElement("img", { src: "section-1-images/arrow.svg", alt: "" }),
        createDynamicElement("img", { src: "section-1-images/shadow.png", alt: "" })
      ])

    ]),
    
    createDynamicElement("div", { class: "hero-description" }, null, [
      createDynamicElement("h1", null, "سامانه تنرو"),
      createDynamicElement("span", null, "دریافت سریع خدمات حمل و نقل و انجام کار با 5 سال سابقه کار با بزرگترین فروشگاه ها و سازمان های بوشهر"),
      createDynamicElement("button", null, "درخواست سفیر")

    ]),
    createDynamicElement("img", { class: "guide-flash", src: "section-1-images/Vector 4.svg", alt: "" })
 
])


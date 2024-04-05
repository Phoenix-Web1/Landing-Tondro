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
      ])
    ])
])


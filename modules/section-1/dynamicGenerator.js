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

}
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
    

}
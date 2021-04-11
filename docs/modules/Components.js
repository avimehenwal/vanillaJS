var EL = function (elementTag, text) {
    var element = document.createElement(elementTag);
    element.innerText = text;
    return element;
};
export var H1 = function (text) { return EL('h1', text); };
export var FOOTER = function (text) { return EL('footer', text); };
export var CHeader = function (text) {
    // let headerComponent = new DocumentFragment()
    var header = document.createElement('header');
    header.appendChild(H1(text));
    return header;
};

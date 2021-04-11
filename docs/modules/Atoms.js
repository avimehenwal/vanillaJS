var CE = function (tag) { return document.createElement(tag); };
// todo: we can use some Parametric/Subtyping Polymorphism here
var CEIT = function (tag, text) {
    var element = CE(tag);
    // @ts-ignore */
    element.innerText = text;
    return element;
};
var CEID = function (tag, id) {
    var element = CE(tag);
    // @ts-ignore */
    element.id = id;
    return element;
};
var CEIDT = function (tag, id, text) {
    var element = CE(tag);
    // @ts-ignore */
    element.id = id;
    // @ts-ignore */
    element.innerText = text;
    return element;
};
export var H1 = function (text) { return CEIT('h1', text); };
export var H2 = function (text) { return CEIT('h2', text); };
export var FOOTER = function (text) { return CEIDT('footer', 'footer', text); };
export var MAIN = function () { return CEID('main', 'main'); };
export var ASIDE = function () { return CE('aside'); };
export var NAV = function () { return CE('nav'); };
export var UL = function () { return CE('ul'); };
export var LI = function (text) { return CEIT('li', text); };
// type name label required?
export var INPUT = function (attributes) {
    var element = CE('div');
    var input = CE('input');
    var label = CE('label');
    var div = CE('div');
    element.appendChild(label);
    element.appendChild(input);
    element.appendChild(div);
    if (attributes.hasOwnProperty('type')) {
        input.setAttribute('type', attributes['type']);
    }
    else {
        input.setAttribute('type', 'text');
    }
    if (attributes.hasOwnProperty('label')) {
        label.innerText = attributes['label'];
    }
    if (attributes.hasOwnProperty('name')) {
        input.setAttribute('name', attributes['name']);
        label.setAttribute('for', attributes['name']);
        div.id = attributes['name'];
    }
    if (attributes.hasOwnProperty('cb')) {
        input.onchange = function (event) { return attributes['cd'](event); };
    }
    return element;
};

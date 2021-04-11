var CE = function (tag) { return document.createElement(tag); };
var CEIT = function (tag, text) {
    var element = CE(tag);
    // @ts-ignore */
    element.innerText = text;
    return element;
};
export var H1 = function (text) { return CEIT('h1', text); };
export var FOOTER = function (text) { return CEIT('footer', text); };
export var MAIN = function () { return CE('main'); };
export var ASIDE = function () { return CE('aside'); };
export var NAV = function () { return CE('nav'); };
export var UL = function () { return CE('ul'); };
export var LI = function (text) { return CEIT('li', text); };

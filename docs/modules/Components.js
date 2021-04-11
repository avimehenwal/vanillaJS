import * as atom from './Atoms.js';
export var CHeader = function (text) {
    // let headerComponent = new DocumentFragment()
    var header = document.createElement('header');
    header.appendChild(atom.H1(text));
    return header;
};
export var LIST = function (collection) {
    var ul = atom.UL();
    for (var key in collection) {
        var li = atom.LI(collection[key]['title']);
        ul.appendChild(li);
    }
    return ul;
};

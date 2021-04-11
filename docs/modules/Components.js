import * as atom from './Atoms.js';
export var LIST = function (collection) {
    var ul = atom.UL();
    for (var key in collection) {
        var li = atom.LI(collection[key]['title']);
        li.onclick = collection[key]['cb'];
        ul.appendChild(li);
    }
    return ul;
};

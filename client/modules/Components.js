import * as atom from './Atoms.js';
import { projects } from './data.js';
var LIST = function (projects) {
    var ul = atom.UL();
    projects.map(function (project) {
        var li = atom.LI(project['title']);
        if (project.hasOwnProperty('cb')) {
            li.onclick = project['cb'];
        }
        ul.appendChild(li);
    });
    return ul;
};
export var CIndex = function () { return LIST(projects); };
//# sourceMappingURL=Components.js.map
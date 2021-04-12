// ISSUE: browser script tag src cannot load files without extensions
import { $ } from './modules/jQuery.js';
import { VP1 } from './modules/VP1.js';
// doesnt need window.onload with SPA, page is already loaded
var state = {
    clickCount: 0,
    projects: [
        {
            "title": "Project One",
            "cb": function () { return updateMainView(VP1); }
        },
        {
            "title": "Project Two",
            "cb": function () { return updateMainView(VP1); }
        },
        {
            "title": "Project Three",
            "href": "html/project3.html"
        },
    ]
};
function updateMainView(ViewMainFn) {
    var main = document.getElementById('main');
    // todo: add fadeOut animation
    main === null || main === void 0 ? void 0 : main.classList.add('removing');
    setTimeout(function () {
        main === null || main === void 0 ? void 0 : main.classList.remove("removing");
    }, 1500);
    // @ts-ignore */
    main === null || main === void 0 ? void 0 : main.innerHTML = '';
    main === null || main === void 0 ? void 0 : main.appendChild(ViewMainFn());
}
var HProjects = function (projects) {
    var ul = document.createElement('ul');
    projects.map(function (project) {
        var li = document.createElement('li');
        if (project.hasOwnProperty('href')) {
            var anchor = document.createElement('a');
            anchor.setAttribute('href', project['href']);
            anchor.innerText = project['title'];
            li.appendChild(anchor);
        }
        else {
            li.innerText = project['title'];
        }
        if (project.hasOwnProperty('cb')) {
            li.onclick = project['cb'];
        }
        ul.appendChild(li);
    });
    return ul;
};
// getElementsByTag returns Node List and not HTMLElement
$('#aside').replace(HProjects(state.projects));
// Add #click tracking script, do not stop event bubbling
// track time spent on each page/ total on website
window.onclick = function (e) {
    console.log(e.target);
    state.clickCount += 1;
    $('#footer').text('Tracking #clicks : ' + state.clickCount);
};

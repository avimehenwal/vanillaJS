// ISSUE: browser script tag src cannot load files without extensions
import { CIndex } from './modules/Components.js';
import { $ } from './modules/jQuery.js';
// doesnt need window.onload with SPA, page is already loaded
var state = {
    clickCount: 0
};
// getElementsByTag returns Node List and not HTMLElement
$('#aside').replace(CIndex());
// Add #click tracking script, do not stop event bubbling
// track time spent on each page/ total on website
window.onclick = function (e) {
    console.log(e.target);
    state.clickCount += 1;
    $('#footer').text('Tracking #clicks : ' + state.clickCount);
};

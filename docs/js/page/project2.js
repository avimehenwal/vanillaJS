var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { $ } from '../modules/jQuery.js';
var readTime = "Approximate XXXX minutes read";
function calculateReadingTime(strings, readTime) {
    var wpm = 200;
    var readingTime = Math.ceil((strings[0] + strings[1]).split(' ').length / wpm);
    console.log(readingTime);
    var readingMinutes = readingTime + " minutes read";
    return "" + strings[0] + readingMinutes + strings[1];
}
var form = calculateReadingTime(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n<div class=newspaper>\n\n<h2>Breaking news</h2>\n<h5>avimehenwal - <small><em>", "</em><small></h5>\n\n<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>\n\n<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>\n\n<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>\n\n</div>\n"], ["\n<div class=newspaper>\n\n<h2>Breaking news</h2>\n<h5>avimehenwal - <small><em>", "</em><small></h5>\n\n<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>\n\n<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>\n\n<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>\n\n</div>\n"])), readTime);
$('main').html(form);
var templateObject_1;
//# sourceMappingURL=project2.js.map
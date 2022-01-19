"use strict";
// what to drag?
// destination of drop
// Events dragstart, dragend
var draggables = document.querySelectorAll('.draggable');
var containers = document.querySelectorAll('.container');
draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', function () {
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', function () {
        draggable.classList.remove('dragging');
    });
});
//# sourceMappingURL=drag-n-drop.js.map
/* Inspired from https://api.jquery.com/category/events/
*/
export function $(selector) {
    var self = {
        // DOM Manipulation
        element: document.querySelector(selector),
        html: function () { return self.element; },
        attr: function (name, value) {
            if (value == null)
                return self.element.getAttribute(name);
            else
                self.element.setAttribute(name, value);
        },
        id: function (value) { self.element.setAttribute('id', value); },
        class: function (value) { self.element.setAttribute('class', value); },
        replace: function (HTMLElement) {
            self.element.innerHTML = '';
            self.element.appendChild(HTMLElement);
        },
        append: function (HTMLElement) { self.element.appendChild(HTMLElement); },
        text: function (text) { self.element.innerText = text; },
        // Event Handler
        on: function (event, callback) { self.element.addEventListener(event, callback); },
        // CSS Manipulation
        hide: function () { self.element.style.display = 'none'; },
    };
    return self;
}
// Example library calls
// $('h1').attr('class', 'new-class')
// console.log($('h1').attr('class'))
// $('h2').hide()
// $('h3').on('click', function () {
//   alert("I was clicked")
// })
//# sourceMappingURL=jQuery.js.map
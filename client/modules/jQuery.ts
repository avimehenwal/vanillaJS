/* Inspired from https://api.jquery.com/category/events/
*/

export function $(selector) {
  const self = {
    // DOM Manipulation
    element: document.querySelector(selector),
    html: (blob) => { self.element.innerHTML = blob },
    attr: (name, value) => {
      if (value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
    },
    id: (value) => { self.element.setAttribute('id', value) },
    class: (value) => { self.element.setAttribute('class', value) },
    replace: (HTMLElement) => {
      self.element.innerHTML = ''
      self.element.appendChild(HTMLElement)
    },
    append: (HTMLElement) => { self.element.appendChild(HTMLElement) },
    text: (text) => { self.element.innerText = text },

    // Event Handler
    on: (event, callback) => { self.element.addEventListener(event, callback) },

    // CSS Manipulation
    hide: () => { self.element.style.display = 'none' },
  }

  return self
}

// Example library calls
// $('h1').attr('class', 'new-class')
// console.log($('h1').attr('class'))

// $('h2').hide()
// $('h3').on('click', function () {
//   alert("I was clicked")
// })

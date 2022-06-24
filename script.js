// console.log("Here is how we will Do DOM manipulation.")
// let a = document
// // a = document.all
// a = document.links
// // a = document.forms

// // Array.from(a).forEach(function(element) {
// //     console.log(element)
// // })
// console.log(a)
// For In Loop
// let post = {
//     id: 2,
//     slug: 'Helloeveryone',
//     title: 'Good Bye'
// }
// for (let prop in post) {
//     console.log(prop + ' : ' + post[prop])
// }

// For Of Loop
// let postId = [1, 2, 3, 4]
// for (const id of postId) {
//     console.log(id)    
// }

// Object with Properties and method
// let post = {
//     id: 2,
//     title: 'Hello Ottr',
//     displayTitle: function() {
//         console.log(post.title)
//     }
// }
// post.displayTitle()

// Dot method Declaration
// let post = {
//     id: 2,
//     title: 'Hello Ottr'
// }
//     post.displayTitle = function() {
//         console.log(post.title)
//     }
// post.displayTitle()

// Method with parameters and return value

// let post = {
//     id: 2,
//     title: 'Hello JavaScript',
//     getTitleMarkup: function(tag) {
//         let markup = ''

//         markup += '<' + tag + '>'
//         markup += post.title
//         markup += '<' + tag + '>'

//         return markup
//     }
// }
// let titleHtml = post.getTitleMarkup('h2')
// console.log(titleHtml)

// this in method
// let post = {
//     id: 2,
//     title: 'Hello JavaScript'
// }
// post.displayTitle = function() {
//     console.log(this.title)
// }
// post.displayTitle()

// let post = {
//         id: 2,
//         slug:'www.js.com',
//         title: 'JavaScript'
//     }

//         post.getTitleLink = function() {
//             let markup = ''
    
//             markup += '<a href = "' + this.slug + '">'
//             markup += this.title
//             markup += '</a>'
    
//             return markup
//         }
//     let title = post.getTitleLink('')
//     console.log(title)

// Do while loop[ with windows]
// let signUp = false,
//     askAgain = true
// do {
//     signUp = window.confirm('Sigh Up')
// } while (false === signUp && true === askAgain)

// While Loop
// let postToDisplay = 10
// while (postToDisplay > 0) {
//     console.log('need')
//     postToDisplay--
// }

// statement = an executable line or block of code
// expression = produce a value or is a value. and part of statement
// keyword = setof words with reserved functionality in JS

 
// DOM
// Document
// DocumentType
// Element
// Text
// Comments
// DocumentFragments


// DOM Traversal
// .parentNode
// .parentElement

// let h1 = document.querySelector('h1'),
//     h1ParentEl = h1.parentElement,
//     h1ParentNode = h1.parentNode;

// console.log(h1ParentEl)
// console.log(h1ParentNode)

// console.log(h1.parentNode.parentNode)

// Any Node Type
    // .childNodes
    // .firstChild
    // .lastChild

// Element Nodes
    // .children
    // .firstElementChild
    // .lastElementChild
    // .childElementCount

// var content = document.getElementsByClassName('content'),
//     contentChildrenEls = content.children,
//     contentChildrenNodes = content.childNodes,
//     contentFirstChildNode = content.firstChild,
//     contentLastChildNode  = content.lastChild,
//     contentLastChildEl = content.lastElementChild,
//     contentFirstChildEl = content.firstElementChild

// console.log( contentChildrenEls )
// console.log( contentChildrenNodes )
// console.log( contentFirstChildNode )
// console.log( contentLastChildNode )
// console.log( contentFirstChildEl )
// console.log( contentLastChildEl )

// console.log(content.childElementCount)

// Any Node Type 
    // .nextSibling
    // .previousSibling

// Element Nodes
    // .nextElementSibling
    // .previousElementSibling

// var contact = document.getElementById('contact')
//     contactPrevNode = contact.previousSibling
//     contactNextNode = contact.nextSibling
//     contactPrevEl = contact.previousElementSibling
//     contactNextEl = contact.nextElementSibling

// console.log(contactPrevNode, contactNextNode)
// console.log(contactPrevEl , contactNextEl)

// Types of Events

// Mouse Events
// Keyboard Events
// Form Events
// Media Events
// Drag and Drop Events
// Window Events


// let logMousePosition = function() {
//     console.log( event.clientX + 'X' + event.clientY)
// }
// document.addEventListener('mousemove', logMousePosition, false)

// let child = document.querySelector('.child')
//     mouseOver
//     mouseEnter
//     mouseLeave

// mouseOver = function mouseOver(){ 
//     console.log('Mouse Over')
// }

// mouseEnter = function mouseEnter() {
//     console.log('Mouse Enter')
//     child.style.cursor = 'wait'
// }

// mouseLeave = function mouseLeave() {
//     console.log('Mouse Keft')
//     child.style.cursor = 'pointer'
// }

// child.addEventListener('mouseover', mouseOver)
// child.addEventListener('mouseenter', mouseEnter)
// child.addEventListener('mouseleave', mouseLeave)

let logKeys,
    updateText,
    showShortcuts;

logKeys = function () {
    let keynum
    if (window.event) {
        key = event.keyCode
    }
    else if (event.which) {
        key = event.which
    }
    updateText(key, event)
}

updateText = function (key) {
    let textContainer = document.getElementById('loggedKeys'),
        text = textContainer.textContent

    if (3 === key) {
        console.log('Cleared!')
        text += ''
    }
    else if (19 === key) {
        console.log('Saved!')
    }
    else if (32 === key) {
        text += ''
    }
    else {
        text += String.fromCharCode(key)
    }
    textContainer.innerHTML = text
}

showShortcuts = function() {
    let parentEl = document.querySelector('.parent')
        helpTextEl = document.createElement('p')
        helpText = document.createTextNode('Shortcuts: Save [crt + s] -- Clear [crt + c]')
        
        helpTextEl.appendChild(helpText)
        parentEl.appendChild(helpTextEl)
}

showShortcuts()
document.addEventListener('keypress', logKeys)
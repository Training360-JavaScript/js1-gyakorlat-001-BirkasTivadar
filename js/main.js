'use strict';

function handleClick() {
    let elements = document.querySelectorAll('.button-class');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            console.log(elements[i].innerHTML)
        })
    }
}


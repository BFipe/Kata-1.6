import {toggleCallbackSidebar, disableAllSidebars} from '../../../default/js/sidebars-togglers.js'

let callbackButtons = document.querySelectorAll('.callback-open');
let callbackButtonClose = document.getElementById('callback-close');

callbackButtons.forEach(button => {
    button.addEventListener('click', () => {
        disableAllSidebars();
        toggleCallbackSidebar();
    });
})

callbackButtonClose.addEventListener('click', () => {
    disableAllSidebars();
});
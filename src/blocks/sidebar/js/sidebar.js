import {toggleMainSidebar, disableAllSidebars} from '../../../default/js/sidebars-togglers.js'

let burgerButton = document.getElementById('main-sidebar-close');
let closeButton = document.getElementById('sidebar-header-close');

burgerButton.addEventListener('click', () => {
    disableAllSidebars();
    toggleMainSidebar();
});

closeButton.addEventListener('click', () => {
    disableAllSidebars();
});


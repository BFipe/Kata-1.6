import {disableAllSidebars} from '../../../default/js/sidebars-togglers.js'

let overlay = document.querySelector('.sidebar-overlay');

overlay.addEventListener('click', disableAllSidebars);
import {toggleFeedbackSidebar, disableAllSidebars} from '../../../default/js/sidebars-togglers.js'

let feedbackButtons = document.querySelectorAll('.feedback-open');
let feedbackButtonClose = document.getElementById('feedback-close');

feedbackButtons.forEach(button => {
    button.addEventListener('click', () => {
        disableAllSidebars();
        toggleFeedbackSidebar();
    });
})

feedbackButtonClose.addEventListener('click', () => {
    disableAllSidebars();
});
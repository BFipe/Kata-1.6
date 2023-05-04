let mainSidebar = document.querySelector('.sidebar');
let feedbackSidebar = document.querySelector('.feedback-sidebar');
let callbackSidebar = document.querySelector('.callback-sidebar');
let overlay = document.querySelector('.sidebar-overlay');

export function toggleMainSidebar() {
    mainSidebar.classList.toggle('disabled');
    overlay.classList.toggle('disabled');
}

export function toggleFeedbackSidebar() {
    feedbackSidebar.classList.toggle('disabled');
    overlay.classList.toggle('disabled');
}

export function toggleCallbackSidebar() {
    callbackSidebar.classList.toggle('disabled');
    overlay.classList.toggle('disabled');
}

export function disableAllSidebars(){
    mainSidebar.classList.add('disabled');
    feedbackSidebar.classList.add('disabled');
    callbackSidebar.classList.add('disabled');
    overlay.classList.add('disabled');
}



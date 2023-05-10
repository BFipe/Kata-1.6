let button = document.querySelector('.article__continue-reading');

let article_content = document.querySelector('.article__show-more-text');

let activated = false;

button.addEventListener('click', () => {
    article_content.classList.toggle('hidden');
    button.classList.toggle('activated');

    if (!activated) {
        button.textContent = 'Скрыть';
        activated = true;
    }
    else{
        button.textContent = 'Читать далее';
        activated = false;
    }
})
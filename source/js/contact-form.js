const contactForm = document.querySelector('.contact-info__form');
const regExpText = /[A-Za-zА-Яа-яЁё\s]+$/g;
const regExpTel = /\+?[0-9\s\-()]+/g;

contactForm.addEventListener('change', (evt) => {

  if (evt.target.type === 'text') {
    if(regExpText.test(evt.target.value)) {
      hideErrorMessage(evt.target);
    } else {
      showErrorMessage(evt.target);
    }
  }
  if (evt.target.type === 'tel') {
    if(regExpTel.test(evt.target.value)) {
      hideErrorMessage(evt.target);
    } else {
      showErrorMessage(evt.target);
    }
  }
});

function showErrorMessage(elem) {
  const messageClass = `.contact-form__message--${elem.name}`;
  const message = document.querySelector(messageClass);
  message.style.visibility = 'visible';
  elem.classList.remove('contact-form__field--valid');
  elem.classList.add('contact-form__field--invalid');
}

function hideErrorMessage(elem) {
  const messageClass = `.contact-form__message--${elem.name}`;
  const message = document.querySelector(messageClass);
  message.style.visibility = 'hidden';
  elem.classList.remove('contact-form__field--invalid');
  elem.classList.add('contact-form__field--valid');
}

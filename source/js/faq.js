const buttonFaqList = document.querySelector('.faq__buttons');
const buttonsFaq = document.querySelectorAll('.faq-button__item');
const faqList = document.querySelectorAll('.faq__list');

// кнопки разделов

faqList.forEach((elem, index) => {
  if(index !== 0) {
    elem.style.display = 'none';
  }
});

buttonFaqList.addEventListener('click', (evt) => {
  const currentButtonAttr = evt.target.getAttribute('data-accordion');
  if (currentButtonAttr) {
    buttonsFaq.forEach((button) => button.classList.remove('faq-button__item--checked'));
    evt.target.classList.add('faq-button__item--checked');

    faqList.forEach((list) => {
      if (list.getAttribute('data-accordion') === currentButtonAttr) {
        list.style.display = 'flex';
      }

      if (list.getAttribute('data-accordion') !== currentButtonAttr) {
        list.style.display = 'none';
      }
    });
  }
});

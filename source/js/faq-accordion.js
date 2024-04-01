const faqWrapper = document.querySelector('.faq__wrapper');
const liAccordion = faqWrapper.querySelectorAll('li');
const firstLi = faqWrapper.querySelector('li');

firstLi.querySelector('p').style.position = 'static';
firstLi.querySelector('p').style.opacity = '1';
firstLi.querySelector('input').checked = 'true';

liAccordion.forEach((liElement) => {
  liElement.addEventListener('click', () => {
    const inputAccodionClick = liElement.querySelector('input[type="checkbox"]');
    openAccordion(liElement, inputAccodionClick);
  });
});

liAccordion.forEach((liElement) => {
  liElement.addEventListener('keydown', (evt) => {
    if(evt.key === 'Enter') {
      const inputAccodionEnter = liElement.querySelector('input[type="checkbox"]');
      if(inputAccodionEnter.checked) {
        inputAccodionEnter.checked = false;
        liElement.querySelector('p').style.opacity = '0';
        liElement.querySelector('p').style.position = 'absolute';
      } else {
        inputAccodionEnter.checked = 'checked';
        liElement.querySelector('p').style.opacity = '1';
        liElement.querySelector('p').style.position = 'static';
      }
    }
  });
});

function openAccordion(item, inputAccodion) {
  if (inputAccodion.checked) {
    item.querySelector('p').style.opacity = '1';
    item.querySelector('p').style.position = 'static';
  } else {
    item.querySelector('p').style.opacity = '0';
    item.querySelector('p').style.position = 'absolute';
  }
}

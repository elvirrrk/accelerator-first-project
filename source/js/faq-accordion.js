const faqWrapper = document.querySelector('.faq__wrapper');
const liAccordion = faqWrapper.querySelectorAll('li');
const firstLi = faqWrapper.querySelector('li');

firstLi.querySelector('p').style.display = 'block';
firstLi.querySelector('input').checked = 'true';

liAccordion.forEach((item) => {
  item.addEventListener('click', () => {
    const inputAccodion = item.querySelector('input[type="checkbox"]');

    if (inputAccodion.checked) {
      item.querySelector('p').style.display = 'block';
    } else {
      item.querySelector('p').style.display = 'none';
    }
  });
});

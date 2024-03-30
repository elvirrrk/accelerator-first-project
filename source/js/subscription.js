const buttonList = document.querySelector('.subscription__button-list');
const buttons = document.querySelectorAll('.buttons-list__button');
const subscriptionLists = document.querySelectorAll('.subscription__list');

subscriptionLists.forEach((elem, i) => {
  if(i !== 0) {
    elem.style.display = 'none';
  }
});

buttonList.addEventListener('click', (evt) => {
  const currentButtonAttr = evt.target.getAttribute('data-subscription');

  if (currentButtonAttr) {
    buttons.forEach((button) => button.classList.remove('buttons-list__button--clicked'));

    evt.target.classList.add('buttons-list__button--clicked');

    subscriptionLists.forEach((list) => {
      if (list.getAttribute('data-subscription') === currentButtonAttr) {
        list.style.display = 'flex';
      }

      if (list.getAttribute('data-subscription') !== currentButtonAttr) {
        list.style.display = 'none';
      }
    });
  }
});

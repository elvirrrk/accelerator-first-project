const buttonList = document.querySelector('.subscription__button-list');
const buttons = document.querySelectorAll('.buttons-list__button');
const subscriptionLists = document.querySelectorAll('.subscription__list');

subscriptionLists.forEach((elem, i) => {
  if(i !== 0) {
    elem.style.display = 'none';
  }
});

buttonList.addEventListener('click', (evt) => {
  if (evt.target.id) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('buttons-list__button--clicked');
    }

    evt.target.classList.add('buttons-list__button--clicked');

    for (let i = 0; i < subscriptionLists.length; i++) {
      if (subscriptionLists[i].id === evt.target.id) {
        subscriptionLists[i].style.display = 'flex';
      }

      if (subscriptionLists[i].id !== evt.target.id) {
        subscriptionLists[i].style.display = 'none';
      }
    }
  }
});

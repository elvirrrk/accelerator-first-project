const videoPreviewButton = document.querySelector('.video-preview__button');
const videoPreview = document.querySelector('.about-media__video-preview');

videoPreviewButton.addEventListener('click', () => {
  videoPreviewButton.style.display = 'none';
  // setTimeout(() => evt.target.disabled = false, 700);
  videoPreview.insertAdjacentHTML('afterbegin', '<iframe class="about-media__video" src="https://www.youtube.com/embed/9TZXsZItgdw?si=18q0hp0POI7EW0zP&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen></iframe>');
});

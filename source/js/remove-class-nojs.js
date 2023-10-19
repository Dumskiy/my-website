const projectSlider = document.querySelector('.project__slider');
const projectImages = document.querySelectorAll('.project__image--large');

export const removeClassNojs = () => {
  projectSlider.classList.remove('project__slider--nojs');

  projectImages.forEach(image => {
    debugger;
    image.classList.remove('project__image--nojs');
  });
}

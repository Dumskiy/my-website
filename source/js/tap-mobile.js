
const elementTap = document.querySelector('.major-hero');

const ELEMENTS = [
  "acquaintance",
  "navigation"
];

const switchBloks = () => {
  ELEMENTS.forEach(element => {
    const currentElements = elementTap.querySelector(`.${element}`);
    if (currentElements.classList.contains(`${element}--show`)) {
      currentElements.classList.remove(`${element}--show`);
      currentElements.classList.add(`${element}--hidden`);
    } else if (currentElements.classList.contains(`${element}--hidden`)) {
      currentElements.classList.remove(`${element}--hidden`);
      currentElements.classList.add(`${element}--show`);
    }
  });
};


if (document.documentElement.clientWidth < 1024) {
  elementTap.addEventListener('click', switchBloks);
}

const ELEMENTS = [
  "project__slider",
  "project__image",
  "navigation__link",
  "major-hero__acquaintance"
];

export const initRemoveClassNojs = () => {
  removeClassNojs(ELEMENTS);
}

const removeClassNojs = (array) => {

  array.forEach(element => {
    const elementsNojs = document.querySelectorAll(`.${element}--nojs`);

    elementsNojs.forEach(elementNojs => {
      elementNojs.classList.remove(`${element}--nojs`);
    });
  });
}

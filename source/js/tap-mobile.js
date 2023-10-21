
const elementTap = document.querySelector('.major-hero');
// const elementAcquaintance = elementTap.querySelector('.major-hero__acquaintance');
// const elementNavigation = elementTap.querySelector('.major-hero__navigation');

const ELEMENTS = [
  "major-hero__acquaintance",
  "major-hero__navigation"
];

const switchBloks = () => {
  ELEMENTS.forEach(element => {
    const currentElements = elementTap.querySelector(`.${element}`);

    if (currentElements.style.display === 'block') {
      currentElements.style.display = '';
    } else if (currentElements.style.display === '') {
      currentElements.style.display = 'block';
    }
  });



  // if (elementNavigation.classList.contains('major-hero__navigation--active')) {
  //   elementNavigation.classList.remove('major-hero__navigation--active');
  //   elementAcquaintance.classList.add('major-hero__acquaintance--active');
  // } else {
  //   elementNavigation.classList.add('major-hero__navigation--active');
  //   elementAcquaintance.classList.remove('major-hero__acquaintance--active');
  // }
};


if (window.innerWidth <= 768) {
  elementTap.addEventListener('click', switchBloks);
} else {
  elementTap.removeEventListener('click', switchBloks);
}

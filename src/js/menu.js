(() => {
  const menuBtnRef = document.querySelector('.nav-menu-btn');
  const mobileMenuRef = document.querySelector('.nav-menu');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.nav-menu-btn'),
//     // closeMenuBtn: document.querySelector('.menu__close-btn'),
//     menu: document.querySelector('.nav-menu'),
//     body: document.querySelector('body'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
// //   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-open');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

// $('.nav-menu ul li a').click(function () {
//   $('.nav-menu.is-open').removeClass('is-open');
// });

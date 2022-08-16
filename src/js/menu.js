(() => {
    const menuBtnRef = document.querySelector('.nav-menu-btn');
    const mobileMenuRef = document.querySelector('.nav-menu');

    menuBtnRef.addEventListener("click", () => {
        const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
})();

// $('.nav-menu__item a').click(function () {
//     $('.nav-menu.is-open').removeClass('is-open');
// });

// (() => {
//   const refs = {
//     MenuBtn: document.querySelector('.menu-btn'),
//     menu: document.querySelector('.menu'),
//     body: document.querySelector('body'),
//   };

//   refs.MenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-open');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

// $('.menu__link').click(function () {
//   $('.menu.is-open').removeClass('is-open');
// });


// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu__open-btn'),
//     closeMenuBtn: document.querySelector('.menu__close-btn'),
//     menu: document.querySelector('.mob-menu'),
//     body: document.querySelector('body'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-open');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

// $('.mob-menu__item a').click(function () {
//   $('.mob-menu.is-open').removeClass('is-open');
// });
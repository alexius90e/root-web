const headerBurgerButton = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu');
const headerNavLinks = document.querySelectorAll('.header__nav-link');

function openMenu() {
  if (headerBurgerButton && headerMenu) {
    headerBurgerButton.classList.add('active');
    headerMenu.classList.add('active');
    document.body.classList.add('hidden');
  }
}

function closeMenu() {
  if (headerBurgerButton && headerMenu) {
    headerBurgerButton.classList.remove('active');
    headerMenu.classList.remove('active');
    document.body.classList.remove('hidden');
  }
}

headerNavLinks.forEach((link) => link.addEventListener('click', closeMenu));

if (headerBurgerButton && headerMenu) {
  headerBurgerButton.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');

    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

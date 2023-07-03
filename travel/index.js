const burgerMenu = document.querySelector('.header_burger')
const container = document.querySelector('.header__nav-container')
const closeMenu = document.querySelector('.header__nav-close')
const navigation = document.querySelector('.header__nav-mobile')


burgerMenu.onclick = function () {
  navigation.classList.add('header__nav-mobile-active')
  container.classList.add('header__nav-container-activ')
}

closeMenu.onclick = function () {
  navigation.classList.remove('header__nav-mobile-active')
}

navigation.onclick = function () {
  navigation.classList.remove('header__nav-mobile-active')
}


// ハンバーガー
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
// ハンバーガー

// フェードイン
const fadeIn = document.querySelector('.header-container');
fadeIn.animate([{opacity: '0'}, {opacity: '2'}], 2000);

const fadeInMessage = document.querySelector('.mission-title h2');
fadeInMessage.animate([{opacity: '0'}, {opacity: '2'}], 2000);
// フェードイン
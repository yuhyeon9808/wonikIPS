//투뎁스 열리게
const navList = document.querySelector('.nav__list');
const megaMenu = document.getElementById('mega-menu');
const header = document.querySelector('header');

if (navList && megaMenu && header) {
  // nav 안 클릭이면 무조건 열기
  navList.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) e.preventDefault();
    header.classList.add('on');
    megaMenu.classList.add('open');
    e.stopPropagation();
  });

  // mega 영역 클릭은 닫히지 않게
  megaMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  //  nav/mega 외부 클릭이면 닫기
  document.addEventListener('click', (e) => {
    const clickedInsideNav = e.target.closest('.nav');
    const clickedInsideMega = e.target.closest('#mega-menu');

    if (!clickedInsideNav && !clickedInsideMega) {
      megaMenu.classList.remove('open');
    }
  });
}

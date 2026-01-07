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

//햄버거 메뉴
const menu_btn = document.querySelector('.menu-btn');
const m_nav = document.querySelector('.m-nav');
const close_btn = document.querySelector('.close-btn');

menu_btn.addEventListener('click', () => {
  m_nav.classList.add('open');
});

close_btn.addEventListener('click', () => {
  m_nav.classList.remove('open');
});

//언어 버튼
const lang_btn = document.querySelectorAll('.lang-btn');
const lang_menu = document.querySelector('.lang-menu');

lang_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const headerEl = btn.closest('header');
    const menuEl = headerEl.querySelector('.lang-menu');

    headerEl.classList.add('on');
    menuEl.classList.add('open');
  });
});

document.addEventListener('click', (e) => {
  const openedMenu = document.querySelector('.lang-menu.open');
  if (!openedMenu) return;

  const headerEl = openedMenu.closest('header');
  const insideMenu = e.target.closest('.lang-menu');
  const onBtn = e.target.closest('.lang-btn');

  if (!insideMenu && !onBtn) {
    openedMenu.classList.remove('open');
    headerEl.classList.remove('on');
  }
});

const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');
const body = document.body;

elSiteThemeToggler.addEventListener('click', function () {
  // dark-mode klassini yoqish va o'chirish
  body.classList.toggle("dark-mode");
  // localStorage ga qiymatni saqlash
  localStorage.setItem('dark', body.classList.contains("dark-mode"));
});

// Saqlangan holatni tekshirish va localStorage dan foydalanish
if (localStorage.getItem('dark') === 'true') {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}

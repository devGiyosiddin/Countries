const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');
const body = window.document.body;

elSiteThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle("dark-mode");
  elSiteThemeToggler.checked = document.body.classList.contains("dark-mode");
});

elSiteThemeToggler.addEventListener('change', function() {
  localStorage.setItem('dark', this.checked);
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

if (localStorage.getItem('dark') === 'true') {
  body.classList.add('dark-mode');
  elSiteThemeToggler.checked = true;
}

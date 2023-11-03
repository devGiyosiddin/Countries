const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');
elSiteThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle("dark-mode");
});

/* const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');
elSiteThemeToggler.addEventListener( 'change', function() {
  localStorage.setItem('dark',this.checked);
  if(this.checked) {
       body.classList.add('dark-mode')
  } else {
       body.classList.remove('dark-mode')     
  }
});

if(localStorage.getItem('dark')) {
  body.classList.add('dark-mode');
} */

/* checbox.addEventListener( 'change', function() {
  localStorage.setItem('dark-mode',this.checked);
  if(this.checked) {
       body.classList.add('dark-mode')
  } else {
       body.classList.remove('dark-mode')     
  }
});

if(localStorage.getItem('dark')) {
  body.classList.add('dark');
} */

/* const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');
elSiteThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle("dark-mode");
  if(this.checked) {
       body.classList.add('dark-mode')
  } else {
       body.classList.remove('dark-mode')     
  }
}); */

/* element.querySelector.document.body = elSwitcher
elSwitcher.addEventListener( 'change', function() {
  localStorage.setItem('dark-mode',this.checked);
  if(this.checked) {
       body.classList.add('dark-mode')
  } else {
       body.classList.remove('dark-mode')     
  }
}); */



/* button = document.getElementById ('dark-mode');

body = document.getElementById ('body');

dark = localStorage.getItem ('dark');

if (dark) { checkbox.checked = dark ==='true'; body.classList.toggle ('dark-mode', dark === 'true'); };

addEventListener ('change', function () { localStorage.setItem ('dark', this.checked); body.classList.toggle ('dark-mode', this.checked); }); */



// Get the checkbox element that toggles the dark mode let checkbox = document.getElementById (‘darkmode’);

// Get the body element that has the dark-mode class let body = document.getElementById (‘body’);

// Check if there is a stored value for ‘dark’ in localStorage let dark = localStorage.getItem (‘dark’);

// If there is, set the checkbox and the body class accordingly if (dark) { checkbox.checked = dark === ‘true’; body.classList.toggle (‘dark-mode’, dark === ‘true’); }

// Add an event listener to the checkbox that changes the localStorage value and the body class checkbox.addEventListener (‘change’, function () { localStorage.setItem (‘dark’, this.checked); body.classList.toggle (‘dark-mode’, this.checked); });
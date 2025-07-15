const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function switchTheme() {
  const body = document.body;
  const isDark = body.classList.toggle('dark-theme');

  // Change l'icône
  themeIcon.src = isDark ? '../img/sun.svg' : '../img/moon.svg';
  themeIcon.alt = isDark ? 'Icône soleil' : 'Icône lune';
}

// événement au clic
toggleButton.addEventListener('click', switchTheme);

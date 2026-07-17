function applyDarkMode(isDark) {
  document.documentElement.classList.toggle('dark', isDark);

  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    icon.className = isDark ? 'fas fa-sun text-sm' : 'fas fa-moon text-sm';
  }

  const button = document.getElementById('theme-toggle');
  if (button) {
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function toggleDarkMode() {
  const isDark = !document.documentElement.classList.contains('dark');
  applyDarkMode(isDark);
  localStorage.setItem('resumeDarkMode', String(isDark));
}

document.addEventListener('DOMContentLoaded', () => {
  // Fall back to the OS preference until the visitor makes an explicit choice.
  const saved = localStorage.getItem('resumeDarkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyDarkMode(saved === null ? prefersDark : saved === 'true');
});

/*You can write your own code below*/

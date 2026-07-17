// The initial theme is applied inline in <head> to avoid a flash of the wrong
// theme; this only handles the toggle and keeping the icon honest.
(function () {
  var MOON = 'M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z';
  var SUN = 'M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4';

  var button = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  if (!button || !icon) return;

  function render(isDark) {
    icon.innerHTML = '<path d="' + (isDark ? SUN : MOON) + '"/>';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  render(document.documentElement.classList.contains('dark'));

  button.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    render(isDark);
  });
})();

// Highlight the nav entry for whichever section is currently in view.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  var sections = [];

  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (!section) return;
    byId[id] = link;
    sections.push(section);
  });

  var visible = {};

  function update() {
    // Pick the topmost section currently on screen, so the rail never lags.
    var current = sections.filter(function (s) { return visible[s.id]; })[0];
    links.forEach(function (link) { link.classList.remove('active'); });
    if (current && byId[current.id]) byId[current.id].classList.add('active');
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      visible[entry.target.id] = entry.isIntersecting;
    });
    update();
  }, { rootMargin: '-10% 0px -70% 0px' });

  sections.forEach(function (s) { observer.observe(s); });
})();

// Copy install commands.
(function () {
  document.querySelectorAll('.copy').forEach(function (button) {
    button.addEventListener('click', function () {
      var text = button.getAttribute('data-copy');
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(text).then(function () {
        var previous = button.textContent;
        button.textContent = 'Copied';
        setTimeout(function () { button.textContent = previous; }, 1200);
      });
    });
  });
})();

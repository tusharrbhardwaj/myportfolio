const pages = {
    home: document.getElementById('page-home'),
    work: document.getElementById('page-work'),
    contact: document.getElementById('page-contact')
  };
  const navLinks = document.querySelectorAll('[data-link]');
  const menuBtn = document.getElementById('menuBtn');
  const navEl = document.getElementById('navLinks');

  function route() {
    const hash = (location.hash || '#home').replace('#','');
    const target = pages[hash] ? hash : 'home';
    Object.entries(pages).forEach(([key, el]) => el.classList.toggle('active', key === target));
    navLinks.forEach(a => { if (a.closest('nav')) a.classList.toggle('active', a.dataset.link === target); });
    navEl.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    window.scrollTo(0,0);
  }

  window.addEventListener('hashchange', route);
  menuBtn.addEventListener('click', () => {
    const open = navEl.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  route();

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");

// Apply saved theme immediately
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  const isDark =
    document.documentElement.classList.contains("dark");

  localStorage.setItem(
    "portfolio-theme",
    isDark ? "dark" : "light"
  );

  updateThemeIcon();
});

function updateThemeIcon() {
  const isDark =
    document.documentElement.classList.contains("dark");

  themeIcon.textContent = isDark ? "☀" : "☾";

  themeToggle.setAttribute(
    "aria-label",
    isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
  );
}
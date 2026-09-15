// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight active section in sidebar nav while scrolling
const navLinks = document.querySelectorAll('.sidebar-nav a');
const sections = [...navLinks].map(link =>
  document.querySelector(link.getAttribute('href'))
).filter(Boolean);

if ('IntersectionObserver' in window && sections.length){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = document.querySelector(`.sidebar-nav a[href="${id}"]`);
      if (!link) return;
      if (entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

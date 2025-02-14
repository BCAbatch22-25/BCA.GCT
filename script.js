lucide.createIcons();
const batchSelect = document.getElementById('batchSelect');
const batches = document.querySelectorAll('.batch');
if (batchSelect) {
  batchSelect.addEventListener('change', function () {
    batches.forEach(batch => batch.classList.add('hidden'));
    const selectedBatch = this.value;
    if (selectedBatch) document.getElementById(selectedBatch).classList.remove('hidden');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('text-blue-600','active-nav');
    link.classList.add('text-gray-600');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.remove('text-gray-600');
      link.classList.add('text-blue-600','active-nav');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Auto-update footer year
  const footerYear = document.querySelector('.footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 50;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // Active section highlighting on scroll for both desktop and mobile navbars
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  window.addEventListener('scroll', function() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'active-nav');
      link.classList.add('text-gray-600', 'font-semibold');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.remove('text-gray-600');
        link.classList.add('text-blue-600', 'active-nav');
      }
    });
  });

  // Initialize lucide icons
  lucide.createIcons();

  // Batch select functionality (if applicable)
  const batchSelect = document.getElementById('batchSelect');
  const batches = document.querySelectorAll('.batch');
  if (batchSelect) {
    batchSelect.addEventListener('change', function () {
      batches.forEach(batch => batch.classList.add('hidden'));
      const selectedBatch = this.value;
      if (selectedBatch) document.getElementById(selectedBatch).classList.remove('hidden');
    });
  }
});

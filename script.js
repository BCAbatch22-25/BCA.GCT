document.getElementById('batchSelect').addEventListener('change', function () {
    document.querySelectorAll('.batch').forEach(batch => batch.classList.add('hidden'));
    const selectedBatch = this.value;
    if (selectedBatch) document.getElementById(selectedBatch).classList.remove('hidden');
});

 // Initialize Lucide icons
 lucide.createIcons();

 // Gallery batch selection functionality
 const batchSelect = document.getElementById('batchSelect');
 const batches = document.querySelectorAll('.batch');

 batchSelect.addEventListener('change', function () {
     // Hide all batches
     batches.forEach(batch => {
         batch.classList.remove('active');
         batch.classList.add('hidden');
         batch.classList.add('opacity-0');
         batch.classList.add('translate-y-4');
     });

     // Show selected batch
     if (this.value) {
         const selectedBatch = document.getElementById(this.value);
         selectedBatch.classList.remove('hidden');
         setTimeout(() => {
             selectedBatch.classList.add('active');
             selectedBatch.classList.remove('opacity-0');
             selectedBatch.classList.remove('translate-y-4');
         }, 10);
     }
 });

 // Smooth scroll behavior
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 // Mobile navigation active state
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
         link.classList.remove('text-blue-600');
         link.classList.add('text-gray-600');
         if (link.getAttribute('href').includes(current)) {
             link.classList.remove('text-gray-600');
             link.classList.add('text-blue-600');
         }
     });
 });
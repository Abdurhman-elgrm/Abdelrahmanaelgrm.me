document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const icon = item.querySelector('.toggle-icon');
      
      // Toggle active class on clicked item
      item.classList.toggle('active');
      const isActive = item.classList.contains('active');

      // Update icon between '+' and '×'
      if (icon) {
        icon.textContent = isActive ? '×' : '+';
      }
    });
  });
});
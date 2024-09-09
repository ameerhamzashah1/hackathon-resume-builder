
// Get all sections
const sections = document.querySelectorAll('section');

// Get navigation bar links
const navLinks = document.querySelectorAll('nav ul li a');

// Add event listener to navigation bar links
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href')!.replace('#', '');
    const section = document.querySelector(`#${sectionId}`);
    section!.scrollIntoView({ behavior: 'smooth' });
  });
});

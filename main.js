// Get all sections
var sections = document.querySelectorAll('section');
// Get navigation bar links
var navLinks = document.querySelectorAll('nav ul li a');
// Add event listener to navigation bar links
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var sectionId = link.getAttribute('href').replace('#', '');
        var section = document.querySelector("#".concat(sectionId));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

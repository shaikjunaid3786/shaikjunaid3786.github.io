// Update progress bar as user scrolls
document.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});
window.addEventListener('scroll', function() {
    var elementIds = ['animate-about', 'animate-infra', 'animate-company', 'animate-leather', 'animate-why_us', 'animate-contact_us']; // Array of element IDs

    elementIds.forEach(function(id) {
        var element = document.getElementById(id);
        var position = element.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        // Check if the top of the element is within the viewport
        if (position.top < windowHeight && position.bottom >= 0) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    });
});

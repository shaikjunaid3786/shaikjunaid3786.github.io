// Update progress bar as user scrolls
document.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
});


// JavaScript to add animation class when the box is scrolled into view

window.addEventListener('scroll', function() {
    var element = document.getElementById('animated-box-about');
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Check if the top of the element is within the viewport
    if (position.top < windowHeight && position.bottom >= 0) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
});


window.addEventListener('scroll', function() {
    var element = document.getElementById('animated-box-infrastructure');
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Check if the top of the element is within the viewport
    if (position.top < windowHeight && position.bottom >= 0) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
});

window.addEventListener('scroll', function() {
    var element = document.getElementById('animated-box-companyvalues');
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Check if the top of the element is within the viewport
    if (position.top < windowHeight && position.bottom >= 0) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
});

window.addEventListener('scroll', function() {
    var element = document.getElementById('animated-box-leathers');
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Check if the top of the element is within the viewport
    if (position.top < windowHeight && position.bottom >= 0) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
});

window.addEventListener('scroll', function() {
    var element = document.getElementById('animated-box-whyus');
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Check if the top of the element is within the viewport
    if (position.top < windowHeight && position.bottom >= 0) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
});


window.addEventListener('scroll', function() {
    var element = document.getElementById('animated-box-contactus');
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // Check if the top of the element is within the viewport
    if (position.top < windowHeight && position.bottom >= 0) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
});
// पार्टिकल्स कॉन्फिग - नैसर्गिक (पाने, हलकी हिरवी पार्टिकल्स)
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#90EE90" }, // हलकी हिरवी
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#228B22", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});

// अध्याय लिंक्ससाठी साधी स्क्रोल एनिमेशन (जर गरज असेल)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#chapters a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href; // साधी नेव्हिगेशन
        });
    });
});

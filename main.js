// कोणतेही एनिमेशन नाही, फक्त लिंक्स + नवीन functions
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#chapters a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            window.location.href = this.getAttribute('href');
        });
    });

    // फॉन्ट साइज चेंज (global - chapters मध्येही काम करेल)
    window.changeFontSize = function(delta) {
        let currentSize = parseInt(getComputedStyle(document.body).fontSize) || 16;
        let newSize = Math.max(12, Math.min(24, currentSize + delta)); // 12px ते 24px लिमिट
        document.body.style.fontSize = newSize + 'px';
        localStorage.setItem('fontSize', newSize); // सेव्ह करा
    };

    // पेज लोड वर सेव्ह केलेला फॉन्ट अप्लाय करा
    const savedFont = localStorage.getItem('fontSize');
    if (savedFont) {
        document.body.style.fontSize = savedFont + 'px';
    }

    // डे/नाइट टॉगल (global)
    window.toggleMode = function() {
        const body = document.body;
        const button = document.getElementById('toggle-mode');
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            button.textContent = '☀️'; // लाइट आइकॉन
            localStorage.setItem('mode', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            button.textContent = '🌙'; // डार्क आइकॉन
            localStorage.setItem('mode', 'light');
        }
    };

    // पेज लोड वर सेव्ह केलेला मोड अप्लाय करा
    const savedMode = localStorage.getItem('mode');
    const body = document.body;
    if (savedMode === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.getElementById('toggle-mode').textContent = '☀️';
    }
});

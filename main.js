// कोणतेही एनिमेशन नाही, फक्त लिंक्स वर्किंग
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#chapters a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // साधी नेव्हिगेशन, कोणतेही इफेक्ट नाही
            window.location.href = this.getAttribute('href');
        });
    });
});

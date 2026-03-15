document.addEventListener('DOMContentLoaded', () => {

    // Listen for all clicks on the document
    document.addEventListener('click', (e) => {
        const target = e.target;

        // 1. Resume Button Click
        if (target.id === 'btn') {
            window.open('files/Rupika_CV.pdf', '_blank');
        }

        // 2. Project Demo & GitHub Clicks
        if (target.classList.contains('link-btn')) {
            const url = target.getAttribute('data-url');
            if (url && url !== "") {
                window.open(url, '_blank');
            }
        }

        // 3. Social Media/YouTube Clicks
        if (target.classList.contains('social-btn')) {
            const url = target.getAttribute('data-link');
            if (url && url !== "") {
                window.open(url, '_blank');
            }
        }
    });

    // Simple Navbar fade-in on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 255, 255, 0.9)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.7)";
        }
    });
});
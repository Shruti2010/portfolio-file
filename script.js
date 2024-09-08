// Animation for the landing page text
document.addEventListener('DOMContentLoaded', () => {
    const animatedTexts = document.querySelectorAll('.animated-text');
    
    animatedTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = 1;
            text.style.transform = 'translateY(0)';
        }, index * 500); // Delay for each text to appear sequentially
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

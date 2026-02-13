// Main initialization and additional features

// Smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to floating name
function handleParallax() {
    const scrolled = window.pageYOffset;
    const nameBackground = document.querySelector('.name-background');
    
    if (nameBackground) {
        nameBackground.style.transform = `translate(-50%, ${-50 + scrolled * 0.05}%) rotate(-5deg)`;
    }
}

// Throttle function for performance
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Add scroll event listener with throttling
window.addEventListener('scroll', throttle(handleParallax, 10));

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.commits-section, .memes-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effect to commit items
const commitItems = document.querySelectorAll('.commit-item');
commitItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});

// Console Easter egg
console.log('%c💖 Happy Valentine\'s Day, Joanna! 💖', 
    'font-size: 24px; font-weight: bold; color: #ff6b9d; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cYou\'re the best thing that ever happened to my code... and my life! ', 
    'font-size: 16px; color: #4facfe;');
console.log('%cP.S. Check out the hearts 😏', 
    'font-size: 14px; color: #c44569; font-style: italic;');

// Add a special keyboard shortcut (Ctrl/Cmd + K for extra love)
document.addEventListener('keydown', function(e) {
    const key = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && key === 'k') {
        e.preventDefault();
        showNotification('Secret shortcut activated! I love you even more! 💕💕💕');
        
        // Add some sparkle effects
        createSparkleEffect();
    }
});

// Create sparkle effect
function createSparkleEffect() {
    const sparkles = ['✨', '💖', '💕', '💝', '⭐'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = (Math.random() * 30 + 20) + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2000);
        }, i * 100);
    }
}

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0);
        }
        50% {
            opacity: 1;
            transform: translateY(-100px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-200px) scale(0);
        }
    }
`;
document.head.appendChild(style);

// Loading animation complete
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c All systems loaded! Make i go make EBA!', 
    'font-size: 14px; color: #00f2fe; font-weight: bold;');

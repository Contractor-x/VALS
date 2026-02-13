// Hearts configuration
const heartMessages = [
    "You make my code compile perfectly 💕",
    "You're the CSS to my HTML 💖",
    "My favorite debugging partner 💗",
    "You're my main branch 💝",
    "Best commit I ever made 💘",
    "You complete my function 💓",
    "My perfect merge conflict resolution 💞",
    "You're my production-ready code 💟",
    "My favorite stack overflow answer 💕",
    "You're the framework to my structure 💖",
    "My localhost:3000/love 💗",
    "You're my constant, never undefined 💝",
    "Best pull request ever 💘",
    "You're my infinite loop (in a good way) 💓",
    "My favorite component to render 💞",
    "The most hardworking yet calm girl i know",
    "Why commit to Git? when i have you?",
    "you are the best thing that ever happened to my code... and my life! 💕"
];

let loveCount = 0;

// Create a single heart element
function createHeart(index) {
    const heart = document.createElement('div');
    heart.className = `heart float-${(index % 3) + 1} size-${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
    
    // Random positioning
    const leftPos = Math.random() * 80 + 10; // 10-90%
    const topPos = Math.random() * 70 + 10;  // 10-80%
    heart.style.left = `${leftPos}%`;
    heart.style.top = `${topPos}%`;
    
    // Random animation delay
    heart.style.animationDelay = `${Math.random() * 2}s`;
    
    // Heart image
    heart.innerHTML = `
        <img src="assets/images/heart.svg" alt="Love heart" class="heart-icon" draggable="false">
        <div class="heart-message">${heartMessages[index % heartMessages.length]}</div>
    `;
    
    // Click handler
    heart.addEventListener('click', function() {
        handleHeartClick(heart, index);
    });
    
    return heart;
}

// Handle heart click
function handleHeartClick(heart, index) {
    if (heart.classList.contains('clicked')) return;
    
    heart.classList.add('clicked');
    loveCount++;
    
    // Update counter with animation
    const countElement = document.getElementById('love-count');
    countElement.style.transform = 'scale(1.3)';
    setTimeout(() => {
        countElement.textContent = loveCount;
        countElement.style.transform = 'scale(1)';
    }, 100);
    
    // Show notification
    const message = heartMessages[index % heartMessages.length];
    showNotification(message);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
        
        // Add a new heart to replace it
        setTimeout(() => {
            const newHeart = createHeart(Date.now());
            document.getElementById('hearts-container').appendChild(newHeart);
        }, 500);
    }, 600);
}

// Initialize hearts
function initHearts() {
    const container = document.getElementById('hearts-container');
    const numberOfHearts = 12;
    
    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const heart = createHeart(i);
            container.appendChild(heart);
        }, i * 150); // Stagger the appearance
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHearts);
} else {
    initHearts();
}

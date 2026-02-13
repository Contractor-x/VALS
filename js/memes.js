// Meme modal functionality
const memes = {
    1: {
        type: 'text',
        content: '😍',
        text: 'Literally me every time I see you',
        emoji: '😍'
    },
    2: {
        type: 'text',
        content: '🤝',
        text: 'Us: Pair programming through life\'s bugs',
        emoji: '🤝'
    },
    3: {
        type: 'text',
        content: '💪',
        text: 'Our relationship: No merge conflicts, only feature branches',
        emoji: '💪'
    },
    rickroll: {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
        text: 'Never gonna give you up! 🎵'
    }
};

function openMeme(memeId) {
    const modal = document.getElementById('meme-modal');
    const memeDisplay = document.getElementById('meme-display');
    const meme = memes[memeId];
    
    if (!meme) return;
    
    // Clear previous content
    memeDisplay.innerHTML = '';
    
    if (meme.type === 'video') {
        // Rick roll Easter egg
        memeDisplay.innerHTML = `
            <iframe 
                src="${meme.content}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div class="meme-text">${meme.text}</div>
        `;
        
        // Show special notification for rickroll
        setTimeout(() => {
            showNotification('Gotcha! Never gonna give you up! 🎵');
        }, 500);
    } else if (meme.type === 'text') {
        // Text-based meme
        memeDisplay.innerHTML = `
            <div style="font-size: 8rem; margin: 2rem 0;">${meme.emoji}</div>
            <div class="meme-text">${meme.text}</div>
        `;
    }
    
    // Show modal
    modal.classList.remove('hidden');
}

function closeMeme() {
    const modal = document.getElementById('meme-modal');
    modal.classList.add('hidden');
    
    // Stop any playing videos
    const memeDisplay = document.getElementById('meme-display');
    memeDisplay.innerHTML = '';
}

// Initialize meme click handlers
function initMemes() {
    const memeItems = document.querySelectorAll('.meme-item');
    
    memeItems.forEach(item => {
        item.addEventListener('click', function() {
            const memeId = this.getAttribute('data-meme');
            openMeme(memeId);
        });
    });
    
    // Close button
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMeme);
    }
    
    // Close on background click
    const modal = document.getElementById('meme-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeMeme();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMeme();
        }
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMemes);
} else {
    initMemes();
}
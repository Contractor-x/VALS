// Meme modal functionality
const memes = {
    1: {
        type: 'image',
        content: 'assets/images/memes/I Love You Kiss GIF.gif',
        text: 'Funny how we both have this sticker!'
    },
    2: {
        type: 'image',
        content: 'assets/images/memes/Love You Cat GIF.gif',
        text: 'A perfect pair, like Git and GitHub'
    },
    3: {
        type: 'image',
        content: 'assets/images/memes/Suspicious Monkey GIF by MOODMAN.gif',
        text: 'Our relationship? sometimes a little suspicious, but always full of love and a lack of VNs!'
    },
    4: {
        type: 'image',
        content: 'assets/images/memes/Happy Work GIF by Alliance.gif',
        text: 'How it feels knowing you have the absolute Dev of a boo?'
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
    } else if (meme.type === 'image') {
        memeDisplay.innerHTML = `
            <img src="${meme.content}" alt="${meme.text}" class="meme-preview">
            <div class="meme-text">${meme.text}</div>
        `;
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

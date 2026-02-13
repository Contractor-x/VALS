// Notification system
let notificationTimeout;

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const sound = document.getElementById('notification-sound');
    
    // Clear any existing timeout
    if (notificationTimeout) {
        clearTimeout(notificationTimeout);
    }
    
    // Update message
    notificationText.textContent = message;
    
    // Show notification
    notification.classList.remove('hidden');
    
    // Play sound (with error handling)
    try {
        sound.currentTime = 0;
        sound.play().catch(err => {
            // Silently handle autoplay restrictions
            console.log('Audio playback prevented by browser');
        });
    } catch (err) {
        console.log('Audio error:', err);
    }
    
    // Hide after 3 seconds
    notificationTimeout = setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Export for use in other files
window.showNotification = showNotification;
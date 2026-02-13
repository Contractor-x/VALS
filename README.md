# Valentine's Day Web Page for Dev~Bytes

A beautiful, interactive Valentine's Day webpage featuring floating hearts, romantic commit history, memes, and a space-themed design with Dev~Bytes name floating in the background.

## Features

- **Floating Hearts** - Interactive hearts that float around with sweet messages on hover
- **Click Notifications** - Collect love notes by clicking hearts with sound notifications
- **Git Commit Timeline** - A romantic timeline of your love story in git commit format
- **Meme Gallery** - Fun relationship memes with a Rick Roll Easter egg 
- **Space Theme** - Beautiful starry background with Joanna's name floating majestically
- **Smooth Animations** - CSS animations and transitions throughout
- **Responsive Design** - Works beautifully on mobile, tablet, and desktop
- **Easter Eggs** - Secret keyboard shortcuts and console messages

## Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser

### Deploy to GitHub Pages

1. Push this code to a GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from main branch"
4. Your site will be live at `https://yourusername.github.io/repository-name`

## Project Structure

```
valentine-joanna/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles, space theme, Joanna name animation
│   ├── hearts.css      # Heart animations and hover effects
│   ├── commits.css     # Git timeline styling
│   └── memes.css       # Meme gallery and modal
├── js/
│   ├── hearts.js       # Heart generation and click handling
│   ├── notifications.js # Notification system
│   ├── memes.js        # Meme modal functionality
│   └── main.js         # Additional features and Easter eggs
└── README.md           # This file
```

## Customization

### Change Messages
Edit the `heartMessages` array in `js/hearts.js` to customize the love notes:

```javascript
const heartMessages = [
    "Your custom message here 💕",
    "Another sweet message 💖",
    // ... add more
];
```

### Modify Commits
Edit the commit timeline in `index.html` to reflect your own love story.

### Add Your Own Memes
Update the `memes` object in `js/memes.js` to add your own meme images:

```javascript
const memes = {
    1: {
        type: 'image',
        content: 'path/to/your/meme.jpg',
        text: 'Meme caption'
    },
    // ... more memes
};
```

### Change Colors
Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-pink: #ff6b9d;
    --secondary-purple: #c44569;
    --accent-blue: #4facfe;
    /* ... etc */
}
```

## Easter Eggs

- **Press `Ctrl/Cmd + K`** for a special surprise!
- **Check the browser console** for hidden messages
- **Click the mysterious 4th meme** for a classic surprise 😉

## 🛠️ Technologies Used

- Pure HTML5
- CSS3 (Animations, Grid, Flexbox)
- Vanilla JavaScript (No frameworks!)
- Google Fonts (Playfair Display, Space Mono, Poppins)

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## 💝 Credits

Made with ❤️ for the best frontend developer in the world!

## 📝 License

This is a personal Valentine's Day gift. Feel free to use it as inspiration for your own romantic projects! 💕

---

**Happy Valentine's Day, Joanna! 💖**
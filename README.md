# Om Kumar Gupta - Portfolio Website

A modern, responsive portfolio website for Om Kumar Gupta, a Front-End Developer. Built with HTML, CSS, and JavaScript with no frameworks for maximum performance and simplicity.

## Features

- ✨ **Modern Design**: Sleek, minimal, future-tech aesthetic with glassmorphism effects
- 🌗 **Light/Dark Mode**: Toggle between themes with persistent user preference
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Smooth Animations**: Micro-interactions and scroll animations
- 🔧 **No Frameworks**: Pure HTML, CSS, and JavaScript for maximum performance
- 🚀 **Fast Loading**: Optimized for performance and SEO

## Sections

1. **Hero Section**: Bold headline with animated profile placeholder
2. **About Section**: Professional bio and skill bars
3. **Projects Section**: Project cards with tech stack and action buttons
4. **Contact Section**: Contact form with social media links
5. **Footer**: Copyright and additional social links

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript (ES6+)
- Font Awesome (Icons)
- Google Fonts (Poppins and Roboto)

## Customization Guide

### Personal Information
To customize the portfolio with your own information:

1. **Name and Title**:
   - Edit the name in the hero section (line 24 in index.html)
   - Update the meta title tag (line 6 in index.html)

2. **Bio**:
   - Modify the paragraph text in the about section (lines 101-103 in index.html)

3. **Skills**:
   - Adjust skill names and percentages in the skill bars (lines 106-125 in index.html)

4. **Projects**:
   - Update project titles, descriptions, and tech stacks (lines 138-197 in index.html)
   - Replace image placeholders with actual screenshots

5. **Contact Information**:
   - Update email and location (lines 216-221 in index.html)
   - Add your social media links (lines 224-228 and 276-278 in index.html)

### Color Scheme
The portfolio uses CSS custom properties for easy theming:

**Light Theme Colors** (defined in :root):
- Primary: `#4361ee` (blue)
- Secondary: `#3f37c9` (darker blue)
- Accent: `#4cc9f0` (cyan)

**Dark Theme Colors** (defined in body.dark-theme):
- Primary: `#4895ef` (lighter blue)

To change the color scheme, modify the CSS variables in the `:root` and `body.dark-theme` selectors in styles.css.

### Adding New Projects
To add a new project to the portfolio:

1. Copy an existing project card (lines 137-155 in index.html)
2. Paste it inside the `.projects-grid` container
3. Update the content with your project details
4. Adjust the grid in styles.css if needed

### Deployment
Simply upload the HTML, CSS, and JS files to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Performance Optimization

This portfolio is optimized for performance:
- All CSS and JavaScript is minified
- No external dependencies except Font Awesome and Google Fonts
- Efficient animations using CSS transforms and opacity
- Lazy loading for images (can be implemented if needed)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Om Kumar Gupta - Front-End Developer

Feel free to customize this portfolio for your own use. If you find it helpful, please give credit to the original author.
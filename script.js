// DOM Elements
const body = document.body;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const navElements = document.querySelector('.nav-elements');
const navLinks = document.querySelectorAll('.nav-links a');
const progressBars = document.querySelectorAll('.progress');

// Check for saved theme preference or respect OS setting
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Apply theme on page load
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    body.classList.add('dark-theme');
} else {
    body.classList.remove('dark-theme');
}

// Initialize theme toggle after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Set initial theme toggle icon
    if (themeToggle) {
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Theme Toggle
        themeToggle.addEventListener('click', () => {
            // Add transition effect
            body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            
            body.classList.toggle('dark-theme');
            
            // Update icon based on current theme
            if (body.classList.contains('dark-theme')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
            
            // Remove transition after animation completes
            setTimeout(() => {
                body.style.transition = '';
            }, 300);
        });
    }
    
    // Set initial state for skill bars
    progressBars.forEach(bar => {
        bar.style.width = '0';
    });
    
    // Trigger animations for elements already in view
    setTimeout(() => {
        document.querySelectorAll('section').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                if (section.classList.contains('about')) {
                    animateSkillBars();
                }
                section.classList.add('animated');
            }
        });
    }, 100);
});

// Mobile Navigation Toggle
burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    navElements.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('toggle');
        navElements.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animate skill bars when they come into view
const animateSkillBars = () => {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
};

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('about')) {
                animateSkillBars();
            }
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}
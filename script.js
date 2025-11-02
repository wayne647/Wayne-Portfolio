const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}
themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

const emailButton = document.getElementById('email-button');
const contactForm = document.getElementById('contact-form');

if (emailButton && contactForm) {
    emailButton.addEventListener('click', function() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
       const yourEmail = 'waynemangali54@gmail.com';
        const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        window.location.href = mailtoLink;
        
        showNotification('Opening your email client...', 'success');
        
        setTimeout(() => {
            contactForm.reset();
        }, 2000);
    });
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.form-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `form-notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    
   const icon = type === 'success' ? 'fa-check-circle' :
                 type === 'error' ? 'fa-exclamation-circle' :
                 'fa-info-circle';
    
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('translate-x-0', 'opacity-100');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('translate-x-0', 'opacity-100');
        notification.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

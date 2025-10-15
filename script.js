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
/**
 * Marconi 博客子页面 - 主题切换
 */

document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const STORAGE_KEY = 'marconi-theme';

    // 读取本地存储的主题偏好
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'light') {
        html.setAttribute('data-theme', 'light');
        updateToggleIcon(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = html.getAttribute('data-theme') === 'light';
            if (isLight) {
                html.removeAttribute('data-theme');
                localStorage.setItem(STORAGE_KEY, 'dark');
                updateToggleIcon(false);
            } else {
                html.setAttribute('data-theme', 'light');
                localStorage.setItem(STORAGE_KEY, 'light');
                updateToggleIcon(true);
            }
            themeToggle.classList.add('spin');
            setTimeout(() => themeToggle.classList.remove('spin'), 400);
        });
    }

    function updateToggleIcon(isLight) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (isLight) {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
});

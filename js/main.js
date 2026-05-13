/**
 * Marconi 个人主页 - 主脚本
 */

document.addEventListener('DOMContentLoaded', () => {

    // ========== 从 txt 文件加载个人简介 ==========
    fetch('data/profile.txt')
        .then(response => {
            if (!response.ok) throw new Error('无法加载 profile.txt');
            return response.text();
        })
        .then(text => {
            // 按空行拆分为段落
            const paragraphs = text.trim().split(/\n\s*\n/);
            // 将每个段落内的单换行转为 <br>
            const htmlParagraphs = paragraphs.map(p =>
                p.replace(/\n/g, '<br>')
            );

            const bioEl = document.getElementById('profileBio');
            const detailEl = document.getElementById('profileDetail');

            // 第一段作为简短介绍
            if (bioEl && htmlParagraphs.length > 0) {
                bioEl.innerHTML = htmlParagraphs[0];
            }
            // 其余段落作为详细介绍，段落间空一行
            if (detailEl && htmlParagraphs.length > 1) {
                detailEl.innerHTML = htmlParagraphs.slice(1).join('<br><br>');
            }
        })
        .catch(err => {
            console.warn('个人简介加载失败，使用默认内容：', err);
            const bioEl = document.getElementById('profileBio');
            const detailEl = document.getElementById('profileDetail');
            if (bioEl) bioEl.textContent = '你好！我是 Marconi，欢迎来到我的个人主页。';
            if (detailEl) detailEl.textContent = '这里是个人简介的详细内容区域。';
        });

    // ========== 主题切换（日间 / 夜间） ==========
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
            // 旋转动画
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

    // ========== 标签页切换 ==========
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // 移除所有 active 状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // 激活当前
            btn.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // ========== 平滑滚动到内容区（点击向下箭头） ==========
    const heroHint = document.querySelector('.hero-hint');
    if (heroHint) {
        heroHint.addEventListener('click', () => {
            const contentSection = document.getElementById('content');
            if (contentSection) {
                contentSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        // 让提示文字可点击
        heroHint.style.cursor = 'pointer';
    }
});

# marconik.github.io - 个人主页

基于 GitHub Pages 搭建的个人主页。

## 项目结构

```
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 交互脚本
├── images/
│   ├── hero-bg.jpg     # 首屏背景图（需自行放入）
│   └── avatar.jpg      # 个人头像（需自行放入）
└── README.md
```

## 使用前配置

### 1. 放入图片

将你的图片放入 `images/` 目录：

- **`hero-bg.jpg`** — 首屏全屏背景图（建议 1920×1080 或更高分辨率）
- **`avatar.jpg`** — 个人头像（建议 1:1 正方形，≥ 400×400）

### 2. 修改社交媒体链接

编辑 `index.html` 底部 `<footer>` 中的链接，将 `你的ID` 替换为你的实际账号：

- Bilibili: `https://space.bilibili.com/你的ID`
- 小红书: `https://www.xiaohongshu.com/user/profile/你的ID`
- 知乎: `https://www.zhihu.com/people/你的ID`
- GitHub: `https://github.com/marconik`

### 3. 修改个人简介

在 `index.html` 中修改 `#profile` 区域的内容，填入你的真实介绍。

## 部署

将代码推送到 GitHub 仓库 `marconik/marconik.github.io` 的 `main` 分支，GitHub Pages 会自动部署。

访问地址：`https://marconik.github.io`
3. 个人简介部分是一个标准的个人介绍的框架，包含头像以及自我介绍。其他几个标签对应的内容先空着
4. 继续向下滚动，来到页面底部，标注了我的其他社交媒体账号的地址，包括Bilibili，小红书，知乎，以及GitHub的地址
```


# marconik.github.io — 个人主页

基于 GitHub Pages 的响应式个人主页，支持博客发布、深色/浅色主题切换、下拉目录导航等功能。

## 功能特性

### 主页面 (`index.html`)
- **Hero 首屏**：全屏背景图 + 渐变淡入标题 + 向下滚动提示动画
- **标签页切换**：个人简介 / 学习经历 / 科研实习 / 生活娱乐，四个标签页平滑切换
- **博客列表**：自动从 `data/blogs.txt` 读取数据，按年月分组瀑布流展示，含标题、日期、状态标签
- **社交媒体页脚**：Bilibili、小红书、知乎、GitHub 链接，圆角按钮样式
- **日间/夜间模式**：点击按钮切换，偏好自动保存至 `localStorage`

### 博客页面 (`blogs/*.html`)
- **固定顶栏**：左侧返回主页按钮，中间标题悬停弹出下拉目录，右侧主题切换按钮
- **下拉目录 (TOC)**：鼠标悬停标题区域自动展示文章章节导航，点击跳转
- **固定背景**：图片不随页面滚动，内容区呈毛玻璃卡片浮于背景之上
- **70% 内容宽度**：左右留白可见背景图，阅读体验更聚焦
- **科技蓝配色**：标题层级（H2/H3/H4）视觉引导清晰，公式块、提示框样式统一
- **深色/浅色主题**：独立于主页的主题切换，偏好单独保存

## 项目结构

```
├── index.html              # 主页面
├── css/
│   └── style.css           # 主页面样式（CSS 变量 + 响应式）
├── js/
│   └── main.js             # 主页面交互（标签页、博客列表加载、主题切换）
├── images/
│   ├── hero-bg.jpg         # 首屏 & 博客背景图（1920×1080+）
│   └── avatar.jpg          # 个人头像（1:1 正方形, ≥ 400×400）
├── data/
│   ├── profile.txt         # 个人简介文本（自动加载到主页面）
│   └── blogs.txt           # 博客索引（格式：日期 | 标题 | 状态）
├── blogs/
│   ├── 2026-05-13.html     # 博客文章（独立 HTML，内嵌样式）
│   └── ...                 # 更多博客文章
├── LICENSE
└── README.md
```

## 快速开始

### 1. 放入图片

| 文件 | 用途 | 建议尺寸 |
|------|------|----------|
| `images/hero-bg.jpg` | 首屏背景 & 博客背景 | 1920×1080 或更高 |
| `images/avatar.jpg` | 个人头像 | 1:1 正方形, ≥ 400×400 |

### 2. 修改个人简介

编辑 `data/profile.txt`，按段落组织内容（空行分隔）。第一段显示为简短 bio，后续段落为详细介绍。

### 3. 修改社交媒体链接

编辑 `index.html` 底部 `<footer>`，更新四个社交链接。博客文章底部页脚也需单独更新。

## 发布博客

### 创建新文章

1. 在 `blogs/` 下创建 `YYYY-MM-DD.html` 文件
2. 复制现有博客 `<head>` 中的 `<style>` 块（含主题变量和全部样式）
3. 在 `<article class="blog-content">` 中编写正文
4. 更新顶栏标题文案和下拉目录中的章节 `<a>` 链接

### 标题层级规范

```html
<h2 id="标题ID">文章大标题</h2>     <!-- 底部蓝色下划线 -->
<h3 id="章节ID">1. 一级章节</h3>    <!-- 左侧蓝色竖条 -->
<h4 id="小节ID">1.1 二级小节</h4>   <!-- 前置 ▸ 三角 -->
```

### 注册到博客列表

编辑 `data/blogs.txt`，每行一篇：

```
YYYY-MM-DD | 文章标题 | 状态
```

状态可选：`编写中`（黄色）/ `已完成`（绿色）/ `已停更`（灰色）

## 主题定制

### 主页面

CSS 变量定义在 `css/style.css` 的 `:root`（深色）和 `[data-theme="light"]`（浅色）中。

### 博客页面

每个 `blogs/*.html` 内嵌独立的 `<style>` 块，包含 `:root` 和 `[data-theme="light"]` 两组变量。修改某篇博客的样式不影响其他文章。

关键变量：

```css
:root {
    --color-primary: #0ea5e9;         /* 主色调（蓝） */
    --color-accent: #22d3ee;          /* 强调色（青） */
    --color-text: #d4d4d8;            /* 正文文字 */
    --color-heading: #e4e4e7;         /* 标题文字 */
    --color-content-bg: rgba(...);     /* 内容区背景 */
    --color-topbar-bg: rgba(...);      /* 顶栏背景 */
    --color-footer-bg-rgba: rgba(...); /* 页脚背景 */
}
```

## 部署

推送至 GitHub 仓库 `<用户名>/<用户名>.github.io` 的 `main` 分支：

```bash
git add -A
git commit -m "更新主页"
git push origin main
```

GitHub Pages 自动构建部署，访问 `https://<用户名>.github.io`。

## 技术栈

- 纯 HTML / CSS / JavaScript，零构建依赖
- CSS 自定义属性 (CSS Variables) 实现主题切换
- `localStorage` 持久化主题偏好
- `fetch` API 加载 `data/` 下的文本数据
- Font Awesome 6 图标库 (CDN)
- MathJax 数学公式渲染（博客页）
- CSS `backdrop-filter` 毛玻璃效果

## License

MIT License — 详见 [LICENSE](./LICENSE)

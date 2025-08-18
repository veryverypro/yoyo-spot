# Yoyo的个人主页

一个现代化、响应式的个人主页，展示Yoyo（徐子曦）的成长世界，使用 Next.js 14、TypeScript 和 Tailwind CSS 构建。

## 功能特性

- 🎨 现代简约的设计风格
- 🌓 深色/浅色主题切换
- 📱 完全响应式布局
- ⚡ 快速的页面加载速度
- 🎭 流畅的动画效果
- 🔧 模块化的组件结构

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide Icons
- **主题**: next-themes
- **部署**: Vercel

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 选择 Next.js 框架
4. 点击部署

或使用 Vercel CLI：

```bash
npm i -g vercel
vercel
```

## 项目结构

```
yoyo-portfolio/
├── app/                    # Next.js 应用目录
│   ├── layout.tsx         # 根布局
│   ├── page.tsx          # 主页
│   └── globals.css       # 全局样式
├── components/            # React 组件
│   ├── navbar.tsx        # 导航栏
│   ├── hero-section.tsx  # Hero 区域
│   ├── about-section.tsx # 关于模块
│   ├── projects-section.tsx # 爱好展示
│   ├── contact-section.tsx # 联系方式
│   └── footer.tsx        # 页脚
├── public/               # 静态资源
├── tailwind.config.ts    # Tailwind 配置
└── package.json         # 项目配置
```

## 自定义配置

### 修改个人信息

编辑相应的组件文件来更新个人信息：

- `components/hero-section.tsx` - 更新名字和标语
- `components/about-section.tsx` - 更新技能和介绍
- `components/projects-section.tsx` - 添加爱好和经历
- `components/contact-section.tsx` - 更新联系方式

### 修改颜色主题

在 `tailwind.config.ts` 中修改 primary 颜色配置。

## License

MIT

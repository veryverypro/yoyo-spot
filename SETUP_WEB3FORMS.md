# 设置 Web3Forms 邮件功能

要让留言表单能真正发送邮件到 xuhao.pro@gmail.com，请按以下步骤操作：

## 步骤 1：获取 Access Key

1. 访问 https://web3forms.com/
2. 在首页输入你的邮箱地址：`xuhao.pro@gmail.com`
3. 点击 "Get Access Key"
4. 检查你的邮箱，你会收到一个包含 Access Key 的邮件

## 步骤 2：更新代码

1. 打开文件 `components/contact-section.tsx`
2. 找到第 22 行：
   ```javascript
   access_key: "YOUR_ACCESS_KEY_HERE"
   ```
3. 将 `YOUR_ACCESS_KEY_HERE` 替换为你收到的实际 Access Key
   例如：
   ```javascript
   access_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   ```

## 步骤 3：部署更新

```bash
# 提交更改
git add .
git commit -m "Add Web3Forms access key"

# 部署到 Vercel
vercel --prod
```

## 完成！

现在当有人在网站上提交留言时，你会在 xuhao.pro@gmail.com 收到邮件通知。

## 注意事项

- Web3Forms 免费版每月可以发送 250 封邮件
- Access Key 是公开的（在前端代码中），但 Web3Forms 通过域名验证来防止滥用
- 如果需要更高级的功能（如自定义邮件模板），可以升级到付费版本

## 可选：使用环境变量（更安全）

如果你想要更安全地管理 Access Key，可以：

1. 在 Vercel 项目设置中添加环境变量：
   - 变量名：`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - 值：你的 Access Key

2. 在代码中使用：
   ```javascript
   access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE"
   ```

这样 Access Key 就不会直接暴露在代码中了。
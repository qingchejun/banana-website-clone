# banana-website-clone

Next.js (App Router) + TypeScript + Tailwind CSS 营销站点，包含图片上传与 AI 编辑演示。

---

## 中文

### 快速开始

1. 安装依赖：
   ```bash
   pnpm install
   ```
2. 在 `.env.local` 配置环境变量：
   ```bash
   OPENROUTER_API_KEY=your_key_here
   ```
3. 启动开发服务器：
   ```bash
   pnpm dev
   ```

打开 http://localhost:3000。

### 脚本

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 生产构建
- `pnpm start` - 启动生产服务器
- `pnpm lint` - 运行 ESLint

### API

`POST /api/generate`

请求 JSON：

```json
{
  "prompt": "Describe the edit",
  "image": "data:image/png;base64,..."
}
```

响应：

```json
{
  "imageUrl": "data:image/png;base64,..."
}
```

### 部署

可直接部署到 Vercel。确保在 Vercel 项目环境变量中配置 `OPENROUTER_API_KEY`。

---

## English

### Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Configure environment variables in `.env.local`:
   ```bash
   OPENROUTER_API_KEY=your_key_here
   ```
3. Start the dev server:
   ```bash
   pnpm dev
   ```

Open http://localhost:3000.

### Scripts

- `pnpm dev` - start dev server
- `pnpm build` - production build
- `pnpm start` - start production server
- `pnpm lint` - run ESLint

### API

`POST /api/generate`

Expects JSON:

```json
{
  "prompt": "Describe the edit",
  "image": "data:image/png;base64,..."
}
```

Returns:

```json
{
  "imageUrl": "data:image/png;base64,..."
}
```

### Deployment

Works with Vercel. Ensure `OPENROUTER_API_KEY` is set in the project environment variables.

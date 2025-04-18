FROM node:23-slim

WORKDIR /app
RUN corepack enable        # pnpm を有効化

# 依存インストール用レイヤ
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# ソースを最後にコピー（ホットリロード時はボリュームで上書き）
COPY . .

EXPOSE 3000
CMD ["pnpm", "dev"]

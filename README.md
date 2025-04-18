# Serverless-Express-Tutorial

Serverless Expressのチュートリアル

## WSL内に node をインストールする

```
# nvm のインストール
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# インストール完了後、nvmを読み込む
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Node.js の最新安定版をインストール
nvm install --lts

# 確認
node -v
npm -v
```

## express

```
npm install -g pnpm

pnpm add express @codegenie/serverless-express
pnpm add -D typescript ts-node-dev @types/node @types/express
npx tsc --init --rootDir src --outDir dist --module Node16 --target ES2022 --esModuleInterop --strict

pnpm remove express @types/express
pnpm add express@4
pnpm add -D @types/express@4

rm -rf node_modules pnpm-lock.yaml
pnpm add express@^4
pnpm add -D \
  @types/express@^4.17.21 \
  @types/express-serve-static-core@^4.17.41 \
  @types/serve-static@^1.15.7 \
  @types/body-parser@^1.19.5
docker compose exec api npx prisma migrate dev --name init

pnpm add swagger-ui-express swagger-jsdoc
pnpm add -D @types/swagger-jsdoc

pnpm add zod
pnpm add -D @asteasolutions/zod-to-openapi
```

docker-compose down -v
docker-compose build --no-cache
docker-compose up
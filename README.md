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

## 

```
npm install -g pnpm

pnpm add express @codegenie/serverless-express
pnpm add -D typescript ts-node-dev @types/node @types/express
npx tsc --init --rootDir src --outDir dist --module Node16 --target ES2022 --esModuleInterop --strict

pnpm remove express @types/express
pnpm add express@4
pnpm add -D @types/express@4


```

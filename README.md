# nginx-nuxt-with-docker

## docker local 手順
localで node server/index.jsを実行
↓
local側でyarn run build
↓
local側でdocker-compose up --buildを実行
↓
local側でyarn run start:serverを実行
↓
docker 側でnginxを実行

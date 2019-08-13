# SETUP

## 1. 우분투 도커 이미지 다운로드

```bash
docker image pull ubuntu:latest
```

## 2. 도커 컨테이너 생성

```bash
docker run -ti -p 8088:8088 --name test-search-server /bin/bash
```

## 3. 컨테이너 환경 구성

```bash
# 컨테이너 내부
apt update && apt upgrade
apt install git install build-essential libssl-dev curl
```

## 4. NVM 설치

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bashrc

nvm --version
```

## 5. 서버 코드 다운로드

```bash
git clone https://github.com/nyangnyangpunch/restful-search-server.git
cd restful-search-server
```

## 6. 실행

```bash
npm i
node index.js
```

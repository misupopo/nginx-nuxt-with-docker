FROM node:10.16.0-alpine as build-stage

RUN npm config set unsafe-perm true
RUN apk update \
  && apk add -y git \
  && npm install -g npm \
  && npm install -g vue-cli
RUN apk add --no-cache --virtual sudo
RUN set -x \
    && apk add --no-cache --virtual .build-deps \
        python \
        g++ \
        gcc \
        libc-dev \
        make \
        openssl-dev \
        pcre-dev \
        zlib-dev \
        linux-headers \
        libxslt-dev \
        gd-dev \
        geoip-dev \
        perl-dev \
        libedit-dev \
        libusb-dev \
        bash \
        alpine-sdk \
        eudev-dev
# ビルド環境
WORKDIR /app
ADD package*.json ./
ADD yarn.lock ./
RUN export NODE_OPTIONS=“--max-old-space-size=3072”
COPY . .
RUN yarn install
RUN yarn run build
EXPOSE 8080
#COPY . /var/www/html
# nginx
RUN apk update
RUN apk add nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY config/deploy/dev.sh ./
#RUN chmod 755 /app/dev.sh
EXPOSE 80
#WORKDIR /etc/nginx
#RUN nslookup staging.miime.io | grep Address >> /tmp/hosts.txt
#RUN echo `grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' /tmp/hosts.txt -o`' staging.miime.io' >> tmp/hosts.txt
#RUN chown nginx:nginx /var/www/html
#RUN cat /app/dev.sh
CMD ["nginx", "-g", "daemon off;"]
#CMD ["/app/config/deploy/dev.sh"]
# vueの起動
# WORKDIR /app
#CMD ["yarn", "run", "start"]

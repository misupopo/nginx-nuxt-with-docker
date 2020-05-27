#!/bin/sh

#touch /tmp/hosts.txt
#
### set hosts
#nslookup staging.miime.io | grep Address >> /tmp/hosts.txt
#
## shellcheck disable=SC2046
#echo `grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' /tmp/hosts.txt -o`' staging.miime.io' > /tmp/hosts.txt
#
## hostsファイルはコンテナ起動時に上書きされてしまうので、起動後にまた上書きするようにシェルから実行するようにする
#cat /tmp/hosts.txt >> /etc/hosts
#
#cat /etc/hosts

#yarn install

#yarn run build

### Running vue
#yarn run start:backpack

#cp -r /app /var/www/html

## Running nginx
nginx

tail -F anything

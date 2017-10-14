#!/bin/bash

tar -zcvf frontend.tar.gz -C build .
scp frontend.tar.gz root@zrobmy.waw.pl:/var/www/html
ssh root@207.154.228.15 'cd /var/www/html && tar -zxvf frontend.tar.gz'
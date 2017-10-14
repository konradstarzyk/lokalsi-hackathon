#!/bin/bash

tar -zcvf frontend.tar.gz -C build .
scp frontend.tar.gz root@lokalsi.waw.pl:/var/www/html
ssh root@lokalsi.waw.pl 'cd /var/www/html && tar -zxvf frontend.tar.gz'
#!/bin/bash

mvn clean package
scp target/lokalsi-0.0.1-SNAPSHOT.jar root@lokalsi.waw.pl:/opt/lokalsi
ssh root@lokalsi.waw.pl 'cd /opt/lokalsi && ./stop.sh && ./start.sh &'


#!/bin/bash

mvn clean package
scp target/zrobmy-0.0.1-SNAPSHOT.jar root@zrobmy.waw.pl:/opt/zrobmyapp
ssh root@zrobmy.waw.pl 'cd /opt/zrobmyapp && ./stop.sh && ./start.sh &'


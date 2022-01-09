#!/bin/bash

#AUtomatization github

echo "[INFO] - Pushing to remote repo, accept? REMEMBER TO REMOVE EVERY TOKEN AND SENSITIVE INFO FFS"
read -p "[PROMPT] - Write \"yes\" but separated if you're ready: " ANSW
if [ "$ANSW" == "y" ]; then
    git add .
    git commit -m "HIVE-VPN-$(($RANDOM * 50))"
    #git push origin master
    echo "[INFO] - Upload script done!"
else
    echo "[ERROR] - Aborting..."
fi
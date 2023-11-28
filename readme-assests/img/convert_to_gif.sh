#!/bin/bash

if [ "`which ffmpeg`" == "" ]
then
    echo "Need to install ffmpeg first..."
    sudo apt update
    sudo apt install -y ffmpeg
    echo "ffmpeg has been installed!"
fi

ffmpeg -y -i $1 $2
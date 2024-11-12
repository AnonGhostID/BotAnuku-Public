#!/bin/bash

while true; do
    node . --server --autoread
    echo "Restarting the application..."
    sleep 1
done
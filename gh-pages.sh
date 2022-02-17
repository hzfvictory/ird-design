#!/usr/bin/env bash

VERSION=1.0.1

cp -r dist/* ./

cp -r dist/$VERSION/* ./

cp -r `ls | grep -v -E 'dist|node_modules|src|product|build|examples' | xargs` ./product


./upload.sh product
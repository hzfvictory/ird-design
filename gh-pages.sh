#!/usr/bin/env bash

VERSION=2.0.0

cp -r dist/* ./

cp -r dist/$VERSION/* ./


cp -r `ls | grep -v -E 'dist|node_modules|src|product|build|examples' | xargs` ./product

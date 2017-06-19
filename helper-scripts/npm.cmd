
@echo off
setlocal
set PATH=%~dp0../target/node/;%PATH%
node ../node_modules/npm/bin/npm-cli.js %*
@echo on
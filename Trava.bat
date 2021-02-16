@echo off
IF NOT EXIST ".\log\"%USERNAME% MD ".\log\"%USERNAME%
cls
node . > app.log 2>&1
MOVE .\app.log .\log\trava_%random%.log
PAUSE
@echo off
title Node.js Modules Installer

echo          / ---------------------------------------------- /
echo          /       Example-bot created by NekoboyTM         /
echo          /                 1 / 3 / 2019                   /
echo          /             All rights reserved.               /
echo          / ---------------------------------------------- /
echo          /     Installing Required Node Modules...        /
echo          / ---------------------------------------------- /
cd %~dp0
cmd /c "npm i"
echo.
echo                                   Done!
echo                   Creating run file for example-bot...
echo                   ------------------------------------
echo @echo off > runbot.bat
echo echo Created by NekoboyTM >> runbot.bat
echo echo (https://github.com/NekoboyTM/Example-bot) >> runbot.bat
echo echo [ 1 / 3 / 2019 ] >> runbot.bat
echo title Example-music-bot >> runbot.bat
echo :START >> runbot.bat
echo node bot.js >> runbot.bat
echo pause; >> runbot.bat
echo                        "runbot.bat" File Created.
echo                   ------------------------------------
echo                        Deleting unwanted files...
echo                   ------------------------------------
del "%~f0"
echo                                  Closing...
exit

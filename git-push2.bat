@echo off
set "GIT=C:\Users\USER\.gemini\antigravity\scratch\tools\PortableGit\cmd\git.exe"
set "PROJ=C:\Users\USER\.gemini\antigravity\scratch\western-heritage-dental"
set GIT_TERMINAL_PROMPT=0

cd /d "%PROJ%"

echo Checking git status...
%GIT% status

echo.
echo Checking remote...
%GIT% remote -v

echo.
echo Attempting push to GitHub...
%GIT% push -u origin main 2>&1
echo Exit code: %errorlevel%

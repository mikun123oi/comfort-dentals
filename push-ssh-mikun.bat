@echo off
set "GIT=C:\Users\USER\.gemini\antigravity\scratch\tools\PortableGit\cmd\git.exe"
cd /d "C:\Users\USER\.gemini\antigravity\scratch\western-heritage-dental"

echo Removing old remote...
%GIT% remote remove origin 2>nul

echo Adding SSH remote...
%GIT% remote add origin git@github.com:mikun123oi/mikun.git

echo Renaming branch to main...
%GIT% branch -M main

echo Pushing to origin/main via SSH...
%GIT% push -u origin main

echo.
echo Done.
pause

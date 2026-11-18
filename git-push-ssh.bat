@echo off
set "GIT=C:\Users\USER\.gemini\antigravity\scratch\tools\PortableGit\cmd\git.exe"
set "SSH=C:\Users\USER\.gemini\antigravity\scratch\tools\PortableGit\usr\bin\ssh.exe"
set "PROJ=C:\Users\USER\.gemini\antigravity\scratch\western-heritage-dental"
set GIT_SSH_COMMAND="%SSH%" -i "%USERPROFILE%\.ssh\id_ed25519" -o StrictHostKeyChecking=no

cd /d "%PROJ%"

echo Updating remote URL to SSH...
%GIT% remote remove origin 2>nul
%GIT% remote add origin git@github.com:mikun123oi/comfort-dentals.git
%GIT% remote -v

echo.
echo Testing SSH connection to GitHub...
"%SSH%" -i "%USERPROFILE%\.ssh\id_ed25519" -o StrictHostKeyChecking=no -T git@github.com 2>&1

echo.
echo Pushing to GitHub via SSH...
%GIT% push -u origin main 2>&1
echo Exit code: %errorlevel%

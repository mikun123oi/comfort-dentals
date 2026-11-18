@echo off
set "GIT=C:\Users\USER\.gemini\antigravity\scratch\tools\PortableGit\cmd\git.exe"
set "PROJ=C:\Users\USER\.gemini\antigravity\scratch\western-heritage-dental"

cd /d "%PROJ%"

echo [1/5] Initializing git repository...
%GIT% init
if errorlevel 1 goto error

echo [2/5] Configuring git identity...
%GIT% config user.email "comfort-dental@comfortdentalokc.com"
%GIT% config user.name "Comfort Dental Clinic"

echo [3/5] Staging all files...
%GIT% add .
if errorlevel 1 goto error

echo [4/5] Creating commit...
%GIT% commit -m "Update: custom booking form, gold curtain animation, logo, welcome audio"
if errorlevel 1 (
  echo Nothing to commit or commit failed - continuing...
)

echo [5/5] Setting remote to new repo and pushing...
%GIT% remote remove origin 2>nul
%GIT% remote add origin https://github.com/mikun123oi/mikun.git
%GIT% branch -M main
%GIT% push -u origin main
if errorlevel 1 goto push_error

echo.
echo SUCCESS! Code pushed to https://github.com/mikun123oi/mikun
goto end

:push_error
echo.
echo PUSH FAILED - GitHub authentication may be required.
echo Provide a Personal Access Token (PAT) from https://github.com/settings/tokens
goto end

:error
echo.
echo ERROR occurred during git operation.

:end
pause

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

echo [4/5] Creating initial commit...
%GIT% commit -m "Initial commit: Comfort Dental Clinic and Implant Institute website (Next.js 14 + Tailwind CSS)"
if errorlevel 1 goto error

echo [5/5] Setting up remote and pushing to GitHub...
%GIT% remote remove origin 2>nul
%GIT% remote add origin https://github.com/mikun123oi/comfort-dental.git
%GIT% branch -M main
%GIT% push -u origin main
if errorlevel 1 goto push_error

echo.
echo SUCCESS! Code pushed to https://github.com/mikun123oi/comfort-dental
goto end

:push_error
echo.
echo PUSH FAILED - GitHub authentication required.
echo Please provide a Personal Access Token (PAT) from https://github.com/settings/tokens
goto end

:error
echo.
echo ERROR occurred during git operation.

:end

@echo off
echo =============================================
echo  Comfort Dental Clinic - GitHub Push Script
echo =============================================

set "PROJ=C:\Users\USER\.gemini\antigravity\scratch\western-heritage-dental"
cd /d "%PROJ%"

echo [1/5] Initializing git repository...
git init

echo [2/5] Configuring git identity...
git config user.email "comfort-dental@example.com"
git config user.name "Comfort Dental Clinic"

echo [3/5] Staging all files...
git add .

echo [4/5] Creating initial commit...
git commit -m "Initial commit: Comfort Dental Clinic & Implant Institute website (Next.js 14 + Tailwind CSS)"

echo [5/5] Pushing to GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/mikun123oi/comfort-dental.git
git branch -M main
git push -u origin main

echo.
echo Done! Check https://github.com/mikun123oi/comfort-dental for your code.
pause

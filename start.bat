@echo off
title Comfort Dental Clinic - Next.js App
echo Starting Comfort Dental Clinic Next.js Application...
set PATH=C:\Users\USER\.gemini\antigravity\scratch\tools\node-v20.18.0-win-x64;%PATH%
cd /d "%~dp0"
echo Opening local server at http://localhost:3000...
npm run dev
pause

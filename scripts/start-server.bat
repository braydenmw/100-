@echo off
cd /d "c:\Users\brayd\Downloads\bw-nexus-ai-final-11"
echo Starting BW Nexus AI Backend Server...
echo Loading environment from: %CD%\.env
npx tsx server/index.ts
pause

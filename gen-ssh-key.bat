@echo off
set "SSH_KEYGEN=C:\Users\USER\.gemini\antigravity\scratch\tools\PortableGit\usr\bin\ssh-keygen.exe"
set "KEY=%USERPROFILE%\.ssh\id_ed25519"

echo Generating SSH key...
"%SSH_KEYGEN%" -t ed25519 -C "comfort-dental-github" -f "%KEY%" -N ""

echo.
echo === YOUR PUBLIC KEY (copy everything below) ===
type "%KEY%.pub"
echo === END OF PUBLIC KEY ===

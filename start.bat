@echo off
set crashCount=0

:loop
node . --server --autoread

if %errorlevel% neq 0 (
    set /a crashCount+=1
    echo The program has crashed or exited. Attempting restart %crashCount% of 3...

    if %crashCount% geq 3 (
        echo Too many crashes. Press any key to continue...
        pause >nul
        exit
    )
    timeout /t 5 >nul
    goto loop
) else (
    set crashCount=0
)

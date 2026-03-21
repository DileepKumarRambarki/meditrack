#!/bin/bash

echo "Starting MERN + ML Project..."

osascript <<EOF
tell application "Terminal"
    activate
    
    # First tab - Server
    do script "cd ~/Desktop/Final_project/meditrack/server && npm start"
    
    delay 1
    # Second tab - ML Model
    tell application "System Events" to keystroke "t" using command down
    do script "cd ~/Desktop/Final_project/meditrack/ML_model && uvicorn app:app --reload" in selected tab of the front window
    
    delay 1
    # Third tab - Client
    tell application "System Events" to keystroke "t" using command down
    do script "cd ~/Desktop/Final_project/meditrack/client && npm run dev" in selected tab of the front window
    
    
end tell
EOF

echo "All services started!"
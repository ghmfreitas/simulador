#!/bin/bash

# Kill any existing process on port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Start Next.js server
echo "Starting Next.js server on 173.212.232.9:3000..."
npm run dev
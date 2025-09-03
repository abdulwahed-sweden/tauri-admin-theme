#!/bin/bash

# Tauri Admin Theme Development Helper Script

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🎨 Tauri Admin Theme Development Helper${NC}"
echo "======================================"

# Function to start development server
start_server() {
    echo -e "${GREEN}Starting development server...${NC}"
    if command -v python3 &> /dev/null; then
        echo "Server running at: http://localhost:8000"
        python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        echo "Server running at: http://localhost:8000"
        python -m SimpleHTTPServer 8000
    else
        echo -e "${RED}Python not found. Please install Python to run the development server.${NC}"
        exit 1
    fi
}

# Function to open in browser
open_browser() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open http://localhost:8000
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open http://localhost:8000
    else
        echo -e "${YELLOW}Please open http://localhost:8000 in your browser${NC}"
    fi
}

# Function to validate HTML
validate_html() {
    echo -e "${BLUE}Validating HTML...${NC}"
    if command -v tidy &> /dev/null; then
        tidy -errors -quiet index.html
    else
        echo -e "${YELLOW}HTML Tidy not installed. Consider installing it for HTML validation.${NC}"
    fi
}

# Function to show project info
show_info() {
    echo -e "${BLUE}Project Information:${NC}"
    echo "• Theme: Tauri Admin Theme"
    echo "• Type: Single-page HTML admin interface"
    echo "• Features: Dark/light mode toggle, responsive design"
    echo "• Technologies: HTML5, CSS3, JavaScript, Font Awesome"
}

# Main menu
case "$1" in
    "start"|"serve")
        start_server
        ;;
    "open")
        open_browser
        ;;
    "dev")
        echo -e "${GREEN}Starting development environment...${NC}"
        start_server &
        sleep 2
        open_browser
        ;;
    "validate")
        validate_html
        ;;
    "info")
        show_info
        ;;
    *)
        echo "Usage: $0 {start|serve|open|dev|validate|info}"
        echo ""
        echo "Commands:"
        echo "  start/serve  - Start development server"
        echo "  open         - Open browser to localhost:8000"
        echo "  dev          - Start server and open browser"
        echo "  validate     - Validate HTML (requires tidy)"
        echo "  info         - Show project information"
        exit 1
        ;;
esac
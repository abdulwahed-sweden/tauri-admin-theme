# Tauri Admin Theme

A modern, responsive admin dashboard theme built with HTML5, CSS3, and JavaScript.

## Features

- 🎨 Modern design with clean UI
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive layout
- 🚀 Fast and lightweight
- 🎯 Database management interface
- 📊 Dashboard with statistics and tables
- 🔧 Built-in form components

## Quick Start

### Option 1: Use the development script (recommended)
```bash
# Start development server and open in browser
./dev.sh dev

# Or just start the server
./dev.sh start
```

### Option 2: Manual setup
```bash
# Load terminal aliases
source .aliases

# Start development server
serve

# Open in browser (macOS)
open-theme
```

### Option 3: Direct Python server
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open http://localhost:8000 in your browser.

## Available Commands

After sourcing the aliases file:
- `serve` - Start HTTP server on port 8000
- `theme` - Navigate to project directory
- `open-theme` - Open index.html in browser
- `gs` - Git status
- `ga` - Git add
- `gc` - Git commit

## Development Script Commands

```bash
./dev.sh start     # Start development server
./dev.sh open      # Open browser to localhost:8000
./dev.sh dev       # Start server and open browser
./dev.sh validate  # Validate HTML (requires tidy)
./dev.sh info      # Show project information
```

## Project Structure

```
tauri-admin-theme/
├── index.html          # Main HTML file with embedded CSS and JS
├── dev.sh             # Development helper script
├── .aliases           # Terminal aliases for development
├── .gitignore         # Git ignore rules
├── README.md          # This file
└── LICENSE            # License file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and grid/flexbox
- **JavaScript** - Theme switching and interactions
- **Font Awesome** - Icons
- **Google Fonts** - Inter and Fira Code fonts

## Theme Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Mode** - Toggle between light and dark themes
- **Database Interface** - Mock database management UI
- **Form Components** - Ready-to-use form elements
- **Data Tables** - Styled tables for data display
- **Navigation** - Sidebar navigation with active states

## Browser Support

This theme works in all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This project is licensed under the terms specified in the LICENSE file.
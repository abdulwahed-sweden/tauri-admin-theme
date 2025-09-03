import React from 'react';

interface ToolbarProps {
  onThemeToggle: () => void;
  isDarkTheme: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onThemeToggle, isDarkTheme }) => {
  return (
    <div className="toolbar">
      <h1>
        <i className="fas fa-database"></i> Tauri Admin Pro
      </h1>
      <div className="toolbar-actions">
        <button className="btn btn-secondary">
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
        <button className="btn btn-primary">
          <i className="fas fa-plus"></i> New Connection
        </button>
        <button className="theme-toggle" onClick={onThemeToggle}>
          <i className={isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
      </div>
    </div>
  );
};
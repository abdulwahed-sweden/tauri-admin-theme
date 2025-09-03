import React from 'react';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
}

interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

interface SidebarProps {
  activeItem: string;
  onItemSelect: (itemId: string) => void;
}

const sidebarData: SidebarGroup[] = [
  {
    title: 'DATABASES',
    items: [
      { id: 'prod-db', label: 'Production DB', icon: 'fas fa-database' },
      { id: 'backup-db', label: 'Backup DB', icon: 'fas fa-database' },
      { id: 'local-server', label: 'Local Server', icon: 'fas fa-server' },
    ],
  },
  {
    title: 'TOOLS',
    items: [
      { id: 'query', label: 'Query', icon: 'fas fa-search' },
      { id: 'tables', label: 'Tables', icon: 'fas fa-table' },
      { id: 'statistics', label: 'Statistics', icon: 'fas fa-chart-bar' },
      { id: 'users', label: 'Users', icon: 'fas fa-users' },
      { id: 'history', label: 'History', icon: 'fas fa-history' },
    ],
  },
  {
    title: 'SETTINGS',
    items: [
      { id: 'preferences', label: 'Preferences', icon: 'fas fa-cog' },
      { id: 'themes', label: 'Themes', icon: 'fas fa-palette' },
    ],
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemSelect }) => {
  return (
    <div className="sidebar">
      {sidebarData.map((group) => (
        <div key={group.title} className="sidebar-group">
          <div className="sidebar-header">{group.title}</div>
          {group.items.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onItemSelect(item.id);
              }}
            >
              <i className={item.icon}></i> <span>{item.label}</span>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};
import React from 'react';

interface DatabaseStat {
  metric: string;
  value: string;
  status: 'success' | 'warning' | 'error' | 'info';
  statusText: string;
}

const databaseStats: DatabaseStat[] = [
  { metric: 'Size', value: '250 MB', status: 'success', statusText: 'Optimal' },
  { metric: 'Tables', value: '18', status: 'success', statusText: 'Good' },
  { metric: 'Active Queries', value: '3', status: 'info', statusText: 'Normal' },
  { metric: 'Uptime', value: '12 days, 4:32:11', status: 'success', statusText: 'Stable' },
];

export const DatabaseInfo: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return 'fas fa-check-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      case 'error':
        return 'fas fa-times-circle';
      case 'info':
        return 'fas fa-info-circle';
      default:
        return 'fas fa-info-circle';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span>Database Information</span>
        <div>
          <button className="btn btn-secondary btn-sm">
            <i className="fas fa-download"></i> Export
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="section">
          <h3 className="section-title">Statistics</h3>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {databaseStats.map((stat) => (
                  <tr key={stat.metric}>
                    <td>{stat.metric}</td>
                    <td>{stat.value}</td>
                    <td>
                      <span className={`text-${stat.status}`}>
                        <i className={getStatusIcon(stat.status)}></i> {stat.statusText}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Quick Query</h3>
          <div className="code-editor">
            SELECT * FROM users WHERE active = true ORDER BY created_at DESC;
          </div>
          <button className="btn btn-success">
            <i className="fas fa-play"></i> Execute Query
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-save"></i> Save Query
          </button>
        </div>
      </div>
    </div>
  );
};
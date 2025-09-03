import React from 'react';

interface ActivityItem {
  time: string;
  user: string;
  action: string;
  object: string;
  status: 'success' | 'warning' | 'error';
}

const activityData: ActivityItem[] = [
  {
    time: '12:45 PM',
    user: 'admin@example.com',
    action: 'SELECT',
    object: 'users table',
    status: 'success',
  },
  {
    time: '12:30 PM',
    user: 'jane@example.com',
    action: 'INSERT',
    object: 'orders table',
    status: 'success',
  },
  {
    time: '12:15 PM',
    user: 'john@example.com',
    action: 'UPDATE',
    object: 'products table',
    status: 'warning',
  },
  {
    time: '11:50 AM',
    user: 'admin@example.com',
    action: 'DELETE',
    object: 'logs table',
    status: 'error',
  },
];

export const RecentActivity: React.FC = () => {
  const getStatusText = (status: string) => {
    switch (status) {
      case 'success':
        return 'Success';
      case 'warning':
        return 'Warning';
      case 'error':
        return 'Failed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="card">
      <div className="card-header">Recent Activity</div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>User</th>
              <th>Action</th>
              <th>Object</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((activity, index) => (
              <tr key={index}>
                <td>{activity.time}</td>
                <td>{activity.user}</td>
                <td>{activity.action}</td>
                <td>{activity.object}</td>
                <td>
                  <span className={`text-${activity.status}`}>
                    {getStatusText(activity.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
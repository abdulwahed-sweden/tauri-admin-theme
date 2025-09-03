import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  role: string;
  status: string;
  notes: string;
}

export const DataEntryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: 'user',
    status: 'active',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      role: 'user',
      status: 'active',
      notes: '',
    });
  };

  return (
    <div className="card">
      <div className="card-header">Data Entry Form</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="admin">Administrator</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
                <option value="editor">Editor</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Additional information"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save"></i> Save Record
            </button>
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              <i className="fas fa-times"></i> Cancel
            </button>
            <button type="button" className="btn btn-secondary">
              <i className="fas fa-plus"></i> Add Another
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
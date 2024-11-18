"use client";
import React, { useState } from "react";

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ageFilter, setAgeFilter] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const users = [
    { id: 1, name: "John Doe", age: 28, image: "/api/placeholder/40/40" },
    { id: 2, name: "Jane Smith", age: 34, image: "/api/placeholder/40/40" },
    { id: 3, name: "Alex Johnson", age: 22, image: "/api/placeholder/40/40" },
    { id: 4, name: "Emily Davis", age: 26, image: "/api/placeholder/40/40" },
    { id: 5, name: "Michael Brown", age: 40, image: "/api/placeholder/40/40" },
    { id: 6, name: "Sarah Wilson", age: 32, image: "/api/placeholder/40/40" },
    { id: 7, name: "David Lee", age: 28, image: "/api/placeholder/40/40" },
  ];

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id));
    }
  };

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesAge =
      ageFilter === "all" ||
      (ageFilter === "20-30" && user.age >= 20 && user.age <= 30) ||
      (ageFilter === "31-40" && user.age >= 31 && user.age <= 40);
    return matchesSearch && matchesAge;
  });

  return (
    <div className="table-container">
      <div className="top-section">
        <div className="search-filter-container">
          <div className="search-box">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-box">
            <svg
              className="filter-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Ages</option>
              <option value="20-30">20-30</option>
              <option value="31-40">31-40</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={
                    selectedUsers.length === filteredUsers.length &&
                    filteredUsers.length > 0
                  }
                  onChange={handleSelectAll}
                  className="checkbox"
                />
              </th>
              <th>Name</th>
              <th>Age</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                    className="checkbox"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <img
                    src={user.image}
                    alt={user.name}
                    className="user-image"
                  />
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="update-btn">Update</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .table-container {
          width: 100%;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .top-section {
          padding: 16px;
          background-color: #f8f9fa;
          border-bottom: 1px solid #eee;
        }

        .search-filter-container {
          display: flex;
          gap: 16px;
          align-items: center;
          max-width: 100%;
        }

        .search-box {
          position: relative;
          flex: 1;
        }

        .search-input {
          width: 100%;
          padding: 8px 8px 8px 36px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .filter-box {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 150px;
        }

        .filter-select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          background-color: white;
          min-width: 120px;
        }

        .table-wrapper {
          overflow-x: auto;
          padding: 0 16px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 16px;
        }

        thead {
          background-color: #4299e1;
          color: white;
        }

        th {
          padding: 12px;
          text-align: left;
          font-weight: 500;
        }

        td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        tr:hover {
          background-color: #f7fafc;
        }

        .checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .user-image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .update-btn,
        .delete-btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }

        .update-btn {
          background-color: #eab308;
          color: white;
        }

        .update-btn:hover {
          background-color: #ca8a04;
        }

        .delete-btn {
          background-color: #ef4444;
          color: white;
        }

        .delete-btn:hover {
          background-color: #dc2626;
        }

        @media (max-width: 768px) {
          .search-filter-container {
            flex-direction: column;
          }

          .search-box {
            width: 100%;
          }

          .filter-box {
            width: 100%;
          }

          .filter-select {
            width: 100%;
          }

          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default UsersTable;

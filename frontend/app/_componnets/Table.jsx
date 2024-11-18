"use client";
import React, { useState } from "react";
import { Scan } from "lucide-react";
function Page() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [users] = useState([
    {
      id: 1,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      position: "React Developer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      position: "Backend Developer",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john.smith@company.com",
      position: "Frontend Developer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      position: "Product Manager",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@company.com",
      position: "UX/UI Designer",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily.davis@company.com",
      position: "Quality Analyst",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 7,
      name: "David Wilson",
      email: "david.wilson@company.com",
      position: "Backend Developer",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 8,
      name: "Jessica Moore",
      email: "jessica.moore@company.com",
      position: "Frontend Developer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: 9,
      name: "Daniel Lee",
      email: "daniel.lee@company.com",
      position: "Project Manager",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 10,
      name: "Megan Taylor",
      email: "megan.taylor@company.com",
      position: "React Developer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: 11,
      name: "Chris Anderson",
      email: "chris.anderson@company.com",
      position: "Backend Developer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 12,
      name: "Amanda Thomas",
      email: "amanda.thomas@company.com",
      position: "Product Designer",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 13,
      name: "Joshua Martinez",
      email: "joshua.martinez@company.com",
      position: "Frontend Developer",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 14,
      name: "Sophia Garcia",
      email: "sophia.garcia@company.com",
      position: "Product Manager",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 15,
      name: "William Wilson",
      email: "william.wilson@company.com",
      position: "UX/UI Designer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 16,
      name: "Olivia Martinez",
      email: "olivia.martinez@company.com",
      position: "Quality Analyst",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: 17,
      name: "James Lee",
      email: "james.lee@company.com",
      position: "Product Designer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=17",
    },
    {
      id: 18,
      name: "Isabella Perez",
      email: "isabella.perez@company.com",
      position: "Project Manager",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      id: 19,
      name: "Ethan Brown",
      email: "ethan.brown@company.com",
      position: "React Developer",
      status: "Online",
      image: "https://i.pravatar.cc/150?img=19",
    },
    {
      id: 20,
      name: "Liam Harris",
      email: "liam.harris@company.com",
      position: "Backend Developer",
      status: "Offline",
      image: "https://i.pravatar.cc/150?img=20",
    },
  ]);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-col flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <button
            id="dropdownActionButton"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Action button</span> Action
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div
              id="dropdownAction"
              className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Promote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Activate account
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete User
                </a>
              </div>
            </div>
          )}
        </div>

        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              <Scan className="cursor-pointer" />
            </th>
            <th scope="col" className="px-6 py-3">
              #
            </th>

            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="h-96 overflow-scroll">
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">
                {" "}
                <Scan className="cursor-pointer" />
              </td>
              <td className="px-6 py-4">{user.id}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.image}
                    alt={user.name}
                  />
                  <span className="ml-4 font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">{user.position}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    user.status === "Online"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-400">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;

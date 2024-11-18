"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  UserPlus,
  BookPlus,
  Users,
  GraduationCap,
  Layers,
  BarChart,
} from "lucide-react";
export const Sidebar = () => {
  const path = usePathname();

  const menuItems = [
    { icon: <UserPlus />, label: "Add Teacher", href: "/Add_Teacher" },
    { icon: <BookPlus />, label: "Add Course", href: "/add_course" },
    { icon: <Users />, label: "Teachers", href: "/Teachers" },
    { icon: <GraduationCap />, label: "Students", href: "/Students" },
    { icon: <Layers />, label: "Module", href: "/module" },
    { icon: <Users />, label: "Students requests", href: "/requests" },
    { icon: <BarChart />, label: "Student Report", href: "/report" },
  ];

  return (
    <div className="max-sm:hidden">
      {/* <div className="lg:hidden right-0 bg-blue-600 text-white">
        <div className="flex items-center gap-3">
          <span className="text-2xl">👤</span>
          <h1 className="text-xl font-bold">Admin</h1>
        </div>
      </div> */}
      <div className="bg-blue-600 text-white w-64 min-h-screen fixed top-16 left-0">
        <div className="pt-4 pb-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="text-3xl">👤</div>
            <h1 className="text-2xl font-bold">Admin</h1>
          </div>
          <nav>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={
                  path !== item.href
                    ? "flex items-center gap-3 p-3 hover:bg-blue-700  transition-colors w-full "
                    : "flex items-center gap-3 p-3 hover:bg-blue-700  bg-blue-700 transition-colors w-full "
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

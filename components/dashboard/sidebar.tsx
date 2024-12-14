"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CheckSquare,
  FileText,
  BarChart3,
  Settings,
  PlusCircle,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Tasks", icon: CheckSquare, href: "/dashboard/tasks" },
  { name: "Documents", icon: FileText, href: "/dashboard/documents" },
  { name: "Reports", icon: BarChart3, href: "/dashboard/reports" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white dark:bg-gray-800">
      <div className="flex h-14 items-center border-b px-4">
        <h1 className="text-lg font-semibold">WorkFlow Pro</h1>
      </div>
      <nav className="flex-1 space-y-1 p-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700",
                pathname === item.href && "bg-gray-100 dark:bg-gray-700"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4">
        <Link
          href="/dashboard/tasks/new"
          className="flex items-center justify-center space-x-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          <PlusCircle className="h-5 w-5" />
          <span>Add New Task</span>
        </Link>
      </div>
    </div>
  );
}
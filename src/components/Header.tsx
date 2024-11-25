import React from 'react';
import { Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop"
            alt="SABC Logo"
            className="w-10 h-10 rounded"
          />
          <h1 className="text-xl font-semibold text-gray-800">SABC EASY-PAY PLATFORM</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Box Cash</span>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
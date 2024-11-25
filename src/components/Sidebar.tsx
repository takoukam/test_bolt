import React, { useState } from 'react';
import { BarChart3, FileText, Users, Wallet2, Settings, Activity, LogOut } from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  subItems?: { label: string; href: string; }[];
}

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: 'Tableau de bord',
      href: '#'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: 'OP',
      href: '#',
      subItems: [
        { label: 'OP-SIRH', href: '#op-sirh' },
        { label: 'OP-M3', href: '#op-m3' }
      ]
    },
    {
      icon: <Wallet2 className="w-5 h-5" />,
      label: 'Paiements',
      href: '#'
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: 'Bénéficiaires',
      href: '#'
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: 'Utilisateurs',
      href: '#'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: 'Paramétrage',
      href: '#'
    },
    {
      icon: <Activity className="w-5 h-5" />,
      label: 'État des services',
      href: '#'
    }
  ];

  const handleItemClick = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleItemClick(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg ${
                  item.label === 'Tableau de bord' ? 'text-blue-600 bg-blue-50' : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
              {item.subItems && expandedItem === item.label && (
                <ul className="ml-9 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-4 mt-4 border-t">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut className="w-5 h-5" />
              <span>Déconnexion</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
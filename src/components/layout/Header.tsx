import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { LogOut, Settings, UserCircle2 } from 'lucide-react'; // Example icons

// Define props if needed, e.g., user info, notifications
interface HeaderProps {
  appName?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ appName = "TSB Bank", onLogout }) => {
  console.log("Rendering Header");

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              {/* Placeholder for TSB Logo */}
              {appName}
            </Link>
          </div>

          {/* Navigation Links (Example - could use shadcn NavigationMenu here if integrated at page level) */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            <Link to="/move-money" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Move Money</Link>
            <Link to="/cards" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Cards</Link>
          </nav>

          {/* User/Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" aria-label="User Profile">
              <UserCircle2 className="h-6 w-6 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="h-5 w-5 text-gray-700" />
            </Button>
            {onLogout && (
              <Button variant="ghost" size="icon" onClick={onLogout} aria-label="Logout">
                <LogOut className="h-5 w-5 text-gray-700" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Button (placeholder) */}
          <div className="md:hidden flex items-center">
            <Button variant="outline" size="icon">
              {/* <Menu className="h-6 w-6" /> */}
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu (conditionally rendered) */}
    </header>
  );
};
export default Header;